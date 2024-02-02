# DevOps lesson 011 homework
 
###  - Fork [project](https://github.com/YegorMaksymchuk/geography-application)
###  - Import project to GitLab
###  - Create .gitlab-ci.yml file
###  - Setup dedicated gitlab runner linked to your project [docs](https://docs.gitlab.com/runner/install/)
###  - Setup GitLab CI/CD pipeline to build 
###  - Setup GitLab CI/CD pipeline to deploy
###  - Setup webhooks to trigger Jenkins job on successful build 
- [GitLab webhook](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html)
- [Jenkins GitLab webhook plugin](https://plugins.jenkins.io/gitlab-plugin/)
- [Jenkins webhook plugin](https://plugins.jenkins.io/generic-webhook-trigger/)
###  - Setup Jenkins job to deploy application to AWS EC2 instance
- [Jenkins EC2 plugin](https://plugins.jenkins.io/ec2/)
- [Jenkins SSH plugin](https://plugins.jenkins.io/ssh/)
- [Jenkins SSH Agent plugin](https://plugins.jenkins.io/ssh-agent/)
- [Jenkins SSH Steps plugin](https://plugins.jenkins.io/ssh-steps/)
- [Terraform Jenkins plugin](https://plugins.jenkins.io/terraform/)
## In the end you have to provide:
- GitLab project with GitLab CI/CD pipeline
- ON successful build Jenkins job should be triggered
- Jenkins job should create AWS EC2 instance with Terraform or Jenkins plugin 
- Jenkins job should deploy application to AWS EC2 instance as a Docker container