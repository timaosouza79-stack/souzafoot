const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');

// Extract the relevant parts
const getSponsorLogoUrlStr = content.substring(content.indexOf('function getSponsorLogoUrl'), content.indexOf('const sponsorSlots'));
const domainMapStr = content.substring(content.indexOf('const domainMap = {'), content.indexOf('function getSponsorLogoUrl'));
const sponsorBrandsStr = content.substring(content.indexOf('const sponsorBrands = {'), content.indexOf('const domainMap = {'));

eval(sponsorBrandsStr);
eval(domainMapStr);
eval(getSponsorLogoUrlStr);

for (const level in sponsorBrands) {
    for (const s of sponsorBrands[level]) {
        console.log(s.brand, "->", getSponsorLogoUrl(s.brand, s.domain));
    }
}
