const axios = require('axios');

module.exports = {
	client: function(api_key){
		let options = {headers: {'Authorization': api_key, 'Accept': 'application/json'}}

		let serialize = function(obj) {
		  var str = [];
		  for (var p in obj)
		    if (obj.hasOwnProperty(p)) {
		      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		    }
		  return str.join("&");
		}; 

		return {
			async list_calendars(filters){
				return (await axios.get('https://datelist.io/api/calendars?' + serialize(filters), options)).data
			}, 

			async list_products(filters){
				return (await axios.get('https://datelist.io/api/products?' + serialize(filters), options)).data
			}, 

			async list_booked_slots(filters){
				return (await axios.get('https://datelist.io/api/booked_slots?' + serialize(filters), options)).data
			}, 

			async update_booked_slot(id, data){
				return (await axios.patch('https://datelist.io/api/booked_slots/' + id, data, options)).data
			}
		}
	}
}
