main.js
import axios from 'axios'
import { decryptDataToken } from './salse'
import { error } from '../components/structure/sweetAlert'
import { useRouter } from 'next/router'

// export const API = 'http://localhost:3301'   //test
// export const API = ' https://api.cryovivathailand.com'
export const API = 'https://uat-api-stemcell.telecorpthailand.com' // uat
// export const API = 'https://sit-api-stemcell.cryovivathailand.com'  // sit

// export const API = 'https://api.cryovivathailand.com'

//const API  = 'https://api-stemcell.telecorpthailand.com/sales'

export const KeyPDF = 'sd0mD6IrU5WrzrwcXPHH' // uat
// export const KeyPDF = 'VMeLR5MsW5lX3X9YfqQF' //test

export const IMAGEURL = 'https://uat-api-stemcell.telecorpthailand.com/sales/static'
export const LabStaticURL = 'https://uat-api-stemcell.telecorpthailand.com/labs/static'

// export const IMAGEURL = 'http://localhost:3301/sales/static'
// export const LabStaticURL = 'http://localhost:3301/labs/static'

export const report = 'https://uat-api-stemcell.telecorpthailand.com/reports'

// export const IMAGEURL = 'https://sit-api-stemcell.cryovivathailand.com/sales/static'
// export const LabStaticURL = 'https://sit-api-stemcell.cryovivathailand.com/labs/static'
// export const report = 'https://sit-api-stemcell.cryovivathailand.com/reports'

export const GET = (URL, Path = 'sales') => {
	return axios({
		method: 'GET',
		url: `${API}/${Path}${URL}`,
		headers: {
			Authorization: 'Bearer ' + decryptDataToken(),
			'Content-Type': 'application/json',
		},
	})
		.then((result) => {
			return result.data
		})
		.catch((err) => {
			console.log('err', err?.response?.data?.message)
			if (err?.response?.data?.message === 'Wrong authentication token') {
				error('กรุณา Login')
				window.location.replace(window.location.origin)
			}
			return { error: err }
		})
}

export const GET_Report = (URL, data) => {
	return axios({
		method: 'GET',
		url: `${report}${URL}`,
		headers: {
			Authorization: 'Bearer ' + decryptDataToken(),
		},
		responseType: 'arraybuffer',
	})
		.then(function (response) {
			let base64Code = Buffer.from(response.data, 'binary').toString('base64')
			return 'data:application/pdf;base64,' + base64Code
		})
		.catch(function (error) { })
}

export const GET_Import = (URL, data) => {
	return axios({
		method: 'GET',
		url: `${API}/sales${URL}`,
		headers: {
			Authorization: 'Bearer ' + decryptDataToken(),
			'Content-Type': 'application/json',
		},
		responseType: 'arraybuffer',
	})
		.then(function (response) {
			let base64Code = Buffer.from(response.data, 'binary').toString('base64')
			return 'data:application/pdf;base64,' + base64Code
		})
		.catch(function (error) { })
}

export const GET_Report2 = (URL, data) => {
	return axios({
		method: 'GET',
		url: `${report}/reportpdf${URL}`,
		headers: {
			Authorization: 'Bearer ' + decryptDataToken(),
		},
		responseType: 'arraybuffer',
	})
		.then(function (response) {
			let base64Code = Buffer.from(response.data, 'binary').toString('base64')
			return 'data:application/pdf;base64,' + base64Code
		})
		.catch(function (error) { })
}

export const POST_Report = (URL, data) => {
	return axios({
		method: 'POST',
		url: `${report}${URL}`,
		data,
		headers: {
			Authorization: 'Bearer ' + decryptDataToken(),
			'Content-Type': 'application/json',
		},
		responseType: 'arraybuffer',
	})
		.then(function (response) {
			let base64Code = Buffer.from(response.data, 'binary').toString('base64')
			return 'data:application/pdf;base64,' + base64Code
		})
		.catch(function (error) { })
}

export const POST = (URL, data, Path = 'sales') => {
	return axios({
		method: 'POST',
		url: `${API}/${Path}${URL}`,
		data: data,
		headers: {
			Authorization: 'Bearer ' + decryptDataToken(),
			'Content-Type': 'application/json',
		},
	})
		.then((result) => {
			return result.data
		})
		.catch((err) => {
			if (err?.response?.data?.message === 'Wrong authentication token') {
				error('กรุณา Login')
				window.location.replace(window.location.origin)
			}
			return { error: err }
		})
}

export const PUT = (URL, data, Path = 'sales') => {
	return axios({
		method: 'PUT',
		url: `${API}/${Path}${URL}`,
		data: data,
		headers: {
			Authorization: 'Bearer ' + decryptDataToken(),
			'Content-Type': 'application/json',
		},
	})
		.then((result) => {
			return result.data
		})
		.catch((err) => {
			if (err?.response?.data?.message === 'Wrong authentication token') {
				error('กรุณา Login')
				window.location.replace(window.location.origin)
			}1
			return { error: err }
		})
}

export const DELETE = (URL, Path = 'sales') => {
	return axios({
		method: 'DELETE',
		url: `${API}/${Path}${URL}`,
		// data: data,
		headers: {
			Authorization: 'Bearer ' + decryptDataToken(),
			'Content-Type': 'application/json',
		},
	})
		.then((result) => {
			return result.data
		})
		.catch((err) => {
			if (err?.response?.data?.message === 'Wrong authentication token') {
				error('กรุณา Login')
				window.location.replace(window.location.origin)
			}
			return { error: err }
		})
}

export const DELETE2 = (URL, data, Path = 'sales') => {
	return axios({
		method: 'DELETE',
		url: `${API}/${Path}${URL}`,
		data: data,
		headers: {
			Authorization: 'Bearer ' + decryptDataToken(),
			'Content-Type': 'application/json',
		},
	})
		.then((result) => {
			return result.data
		})
		.catch((err) => {
			if (err?.response?.data?.message === 'Wrong authentication token') {
				error('กรุณา Login')
				window.location.replace(window.location.origin)
			}
			return { error: err }
		})
}

export const uploadFileFormData = (URL, data, Path = 'sales') => {
	return axios({
		method: 'POST',
		url: `${API}/${Path}${URL}`,
		data: data,
		headers: {
			Authorization: 'Bearer ' + decryptDataToken(),
			'Content-Type': 'multipart/form-data',
		},
	})
		.then((result) => {
			return result.data
		})
		.catch((err) => {
			if (err?.response?.data?.message === 'Wrong authentication token') {
				error('กรุณา Login')
				window.location.replace(window.location.origin)
			}
			return { error: err }
		})
}

export const POST_Public = (URL, data, headers) => {
	return axios({
		method: 'POST',
		url: `${API}/${URL}`,
		data: data,
		headers: { 'Content-Type': 'application/json', ...headers },
	})
		.then((result) => {
			return result.data
		})
		.catch((err) => {
			return { error: err }
		})
}

export const POST_Public_Report = (URL, data, headers) => {
	return axios({
		method: 'POST',
		url: `${API}/${URL}`,
		data,
		headers: { 'Content-Type': 'application/json', ...headers },
		responseType: 'arraybuffer',
	})
		.then(function (response) {
			let base64Code = Buffer.from(response.data, 'binary').toString('base64')
			return 'data:application/pdf;base64,' + base64Code
		})
		.catch(function (error) {
			return { error: error }
		})
}

export const PUT_Public = (URL, data) => {
	return axios({
		method: 'PUT',
		url: `${API}/${URL}`,
		data: data,
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((result) => {
			return result.data
		})
		.catch((err) => {
			if (err?.response?.data?.message === 'Wrong authentication token') {
				error('กรุณา Login')
				window.location.replace(window.location.origin)
			}
			return { error: err }
		})
}

export const PUT_Report = (URL, data, Path = 'reports') => {
	return axios({
		method: 'PUT',
		url: `${API}/${Path}${URL}`,
		data: data,
		headers: {
			Authorization: 'Bearer ' + decryptDataToken(),
			'Content-Type': 'application/json',
		},
	})
		.then((result) => {
			return result.data
		})
		.catch((err) => {
			if (err?.response?.data?.message === 'Wrong authentication token') {
				error('กรุณา Login')
				window.location.replace(window.location.origin)
			}
			return { error: err }
		})
}