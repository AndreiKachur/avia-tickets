export default class FlightsService {

    // _apiBase = ''
    _apiBase = 'http://localhost:3001'

    async getResourses(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) throw new Error(`Could not fetch ${url}, status ${res.status}`)
        return await res.json()
    }
    async getFlightsItems() {
        return await this.getResourses(`/flights/`)
        // _limit=${num}
        // return await this.getResourses(`/flights?_sort=flight.price.total.amount&_order=asc&_limit=${num}`)
    }
}