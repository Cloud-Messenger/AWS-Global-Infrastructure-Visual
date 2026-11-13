// Illustrative Regions only (not a complete/current list). lon/lat = city area, NOT facility coordinates. Edit freely.
window.REGIONS=[
{n:"Mumbai",c:"ap-south-1",lon:72.9,lat:19.1,area:"Western India",sv:"EC2, RDS, S3",use:"Low-latency apps for Indian users and data residency.",q:"Why choose ap-south-1 for Indian users? Lower latency and in-country data residency."},
{n:"Singapore",c:"ap-southeast-1",lon:103.8,lat:1.35,area:"Southeast Asia",sv:"EC2, DynamoDB, S3",use:"Hub for ASEAN customers.",q:"What factors drive Region selection? Latency, compliance, service availability, cost."},
{n:"Tokyo",c:"ap-northeast-1",lon:139.7,lat:35.7,area:"Japan",sv:"EC2, S3, Lambda",use:"Japanese users and DR for Asia-Pacific.",q:"Are Regions isolated from each other? Yes, by design."},
{n:"US East (N. Virginia)",c:"us-east-1",lon:-77.4,lat:38.9,area:"Eastern United States",sv:"S3, EC2, Route 53",use:"Origin for North American audiences.",q:"Is every service in every Region? No, availability varies per Region."},
{n:"Europe (Ireland)",c:"eu-west-1",lon:-6.3,lat:53.3,area:"Ireland / Western Europe",sv:"EC2, RDS, S3",use:"EU workloads with GDPR considerations.",q:"How do you keep EU data in the EU? Choose EU Regions and restrict replication."}];
window.USERS=[{n:"India",lon:77.2,lat:28.6},{n:"Singapore",lon:103.8,lat:1.3},{n:"Japan",lon:139.7,lat:35.6},{n:"Europe",lon:2.3,lat:48.8},{n:"USA",lon:-95,lat:37}];
window.EDGES=[[72.8,19],[77.5,13],[103.8,1.4],[139.7,35.7],[135.5,34.7],[-0.1,51.5],[8.6,50.1],[2.3,48.8],[-74,40.7],[-118.2,34],[-87.6,41.9],[-77.4,39],[151.2,-33.9],[-46.6,-23.5],[18.4,-33.9]];
