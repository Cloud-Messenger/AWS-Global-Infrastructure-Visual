# AWS-Global-Infrastructure-Visual
Interactive learning project on AWS Regions, Availability Zones, data centers, edge locations, CloudFront, HA and DR, using the fictional **CloudFlix**. Vanilla HTML/CSS/JS, no build step, no external dependencies. Open `index.html`.

**Note:** Regions, edge markers and data-center racks are *illustrative* (not a complete/current list, no real facility coordinates). AZ names like `ap-south-1a` are account-mapped. Reference: https://aws.amazon.com/about-aws/global-infrastructure/

## Features
9 auto-playing steps (pause/resume/reset/prev/next/progress), canvas 3D-style globe (click Regions), layered animated SVG diagram (`diagrams/`), analogy, CloudFlix preview, 15-question quiz, dark/light, reduce-motion.

## Deploy on EC2 (Amazon Linux 2023 + NGINX)
Security group: HTTP 80 from 0.0.0.0/0; SSH 22 from **your IP/32 only**.
```bash
sudo dnf update -y
sudo dnf install -y nginx
sudo systemctl start nginx && sudo systemctl enable nginx
# from your PC: scp -i key.pem -r AWS-Global-Infrastructure-Visual ec2-user@<PUBLIC_DNS>:~/
sudo cp -r ~/AWS-Global-Infrastructure-Visual/. /usr/share/nginx/html/
sudo chown -R nginx:nginx /usr/share/nginx/html && sudo chmod -R 755 /usr/share/nginx/html
curl -I http://localhost
```
Browse `http://<EC2 public DNS>`.
**Troubleshooting:** `sudo systemctl status nginx` / `sudo nginx -t` / `sudo journalctl -u nginx` (service failure); check Security Group, subnet route to an internet gateway and public IP (no connectivity); check paths and `ls /usr/share/nginx/html/js` (404 assets); browser DevTools Console/Network (loading errors).

## GitHub Pages
```bash
git init && git add . && git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<you>/AWS-Global-Infrastructure-Visual.git
git push -u origin main
```
Repo → Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)` → Save → open the published URL. Later: `git add . && git commit -m "Update" && git push`. GitHub Pages is static hosting and creates no AWS infrastructure.

Created by **Cloud Messenger™** · https://cloudmessenger.in/ · https://www.linkedin.com/in/cloud-messenger · https://github.com/Cloud-Messenger · #buildwithCloud-Messenger
© 2026 Cloud Messenger. All rights reserved.
