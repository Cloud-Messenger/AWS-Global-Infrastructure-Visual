# Architecture

Region > VPC > public subnets in 2 AZs > ALB > EC2 (Auto Scaling group). CloudFront + Route 53 in front; S3 for static assets. Multi-AZ = HA; Multi-Region = DR (plan RTO/RPO).
