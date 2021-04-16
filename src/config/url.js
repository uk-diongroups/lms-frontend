let URL;

// Production API
if (window.location.href.includes('marketer.gs3.services')) {
	URL = 'http://api.keytrustcapital.com';
} else {
	URL = 'https://lms-ukdiongroups.herokuapp.com/api/v1';
}

export { URL };
