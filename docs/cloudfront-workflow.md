# CloudFront Workflow

DNS → HTTPS request → edge cache check. HIT: edge → user. MISS: edge → origin (S3/ALB) → edge (cached if eligible per cache policy) → user.
