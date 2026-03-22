---
title: "Terraform Fundamentals: Infrastructure as Code"
date: "2024-11-28"
tags: ["Terraform", "IaC", "AWS"]
excerpt: "Getting started with Terraform — from basic HCL syntax to managing remote state and building reusable modules for cloud infrastructure provisioning."
slug: "terraform-basics"
---

## What is Terraform?

Terraform is an open-source Infrastructure as Code (IaC) tool by HashiCorp. It lets you define cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share.

## Core Concepts

### Providers
Providers are plugins that let Terraform interact with cloud platforms and services. AWS, Azure, GCP, and hundreds of others are supported.

```hcl
provider "aws" {
  region = "ap-south-1"
}
```

### Resources
Resources are the most important element in Terraform. Each resource block describes one or more infrastructure objects.

```hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"

  tags = {
    Name        = "web-server"
    Environment = "production"
  }
}
```

## The Terraform Workflow

1. **`terraform init`** — Initialize the working directory
2. **`terraform plan`** — Preview changes before applying
3. **`terraform apply`** — Apply the planned changes
4. **`terraform destroy`** — Tear down all managed resources

## State Management

Terraform maintains a state file that maps real-world resources to your configuration. For team collaboration, store state remotely using S3, Azure Blob, or Terraform Cloud.

## Conclusion

Terraform transforms infrastructure management from manual, error-prone processes into reproducible, version-controlled code. Start small, build modules, and gradually adopt it across your entire infrastructure.
