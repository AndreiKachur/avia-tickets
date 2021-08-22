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
            case 'one': return `?flight.legs.0.segments.length=1&flight.legs.1.segments.length=2`
            case 'onemore': return `?flight.legs.0.segments.length=2&flight.legs.1.segments.length=1`
            case 'none': return `&flight.legs.0.segments.length=1&flight.legs.1.segments.length=1`
            default: return ''
        }
    }
    filterCompanies = companies => companies
        .reduce((res, company) => res + `&flight.carrier.caption=${company}`, '')

    async getFiltered(carriers, carriersChecked, transfer) {
        let filtered, filtered2, companies = []

        carriersChecked.forEach((el, i) => {
            if (el) companies.push(carriers[i])
        })
        if (transfer === 'none') {
            filtered = this.getTransfer(transfer)
        }
        if (transfer === 'one') {

            if (companies.length > 0) {
                filtered = this.getTransfer('one') + this.filterCompanies(companies)
                filtered2 = this.getTransfer('onemore') + this.filterCompanies(companies)

            } else {
                filtered = this.getTransfer('one')
                filtered2 = this.getTransfer('onemore')
            }
            const temp1 = await this.getResourses(`/flights${filtered}`)
            const temp2 = await this.getResourses(`/flights${filtered2}`)

            return filtered = [...temp1, ...temp2]

        }

        if (companies.length > 0) {
            filtered = filtered + this.filterCompanies(companies)
        }
        filtered = filtered ? '?' + filtered : '/'

        return await this.getResourses(`/flights${filtered}`)
    }
}