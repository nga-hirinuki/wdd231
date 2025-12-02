

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p>Name: ${myInfo.get('first_name')} ${myInfo.get('last_name')}</p>
<p>Job Title: ${myInfo.get('organizational_title')} </p>
<p>Mobile or Phone number: ${myInfo.get('mobile_number')} </p>
<p>Email Address: ${myInfo.get('email')} </p>
<p>Company Name: ${myInfo.get('business_name')} </p>
<p>Membership: ${myInfo.get('product')} </p>
<p>About us: ${myInfo.get('organization_description')} </p>
<p>Time: ${myInfo.get('form_timestamp')} </p>
`

