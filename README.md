# EKS Cluster Setup with Terraform

This repository contains the necessary Terraform scripts to set up an Amazon EKS cluster along with the required VPC and subnets. Follow the steps below to set up your infrastructure and deploy your applications using GitLab CI/CD.

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) installed on your local machine.
- [AWS CLI](https://aws.amazon.com/cli/) installed and configured with your AWS credentials.
- An AWS account with permissions to create EKS clusters, VPCs, and related resources.

## Terraform Directory Structure
```sh
aws configure
cd terraform
terraform init
terraform apply -auto-approve
