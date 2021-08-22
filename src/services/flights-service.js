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
    }
    getTransfer(transfer) {
        switch (transfer) {
            case 'one': return `&flight.legs.0.segments.length=2&&flight.legs.1.segments.length=2`
            case 'none': return `&flight.legs.0.segments.length=1&&flight.legs.1.segments.length=1`
            default: return ''
        }
    }
    async getFiltered(carriers, carriersChecked, transfer) {
        let filtered = this.getTransfer(transfer)
        let companies = []
        carriersChecked.forEach((el, i) => {
            if (el) companies.push(carriers[i])
        })
        if (companies) {
            filtered = filtered + companies
                .reduce((res, company) => res + `&flight.carrier.caption=${company}`, '')
        }
        filtered = filtered ? '?' + filtered : '/'

        return await this.getResourses(`/flights${filtered}`)
    }
}