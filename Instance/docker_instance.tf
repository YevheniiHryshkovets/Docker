provider "aws" {
  # region = "eu-north-1"
}

resource "aws_default_vpc" "docker-default-vpc" {}

# data "template_file" "init" {
#   template = file("template/setup.tpl")
#   vars = {
#     jdk_pkg = "openjdk-11-jdk"
#   }
# }

# provisioner "file" {
#   source      = "conf/proxy.conf"
#   destination = "/etc/apache2/mods-enabled/proxy.conf"
# }

resource "aws_instance" "docker-server" {
  # ami                    = "ami-0fe8bec493a81c7da" # Ubuntu 20
  ami                    = "ami-0c7217cdde317cfec"   # Ubuntu 22
  instance_type          = "t3.micro"
  vpc_security_group_ids = [aws_security_group.docker-server.id]
  key_name               = "0712mac"
  # user_data              = data.template_file.init.rendered
  # user_data = file("./docker_setup.sh")
  tags = {
    Name  = "docker"
    Owner = "Admin"
  }
}


resource "aws_security_group" "docker-server" {
  name        = "docker Security Group"
  description = "docker wev server security group"
  vpc_id      = aws_default_vpc.docker-default-vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp"
    from_port   = 22
    to_port     = 22
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name  = "docker"
    Owner = "docker"
  }

}

output "docker_ip" {
  value = aws_instance.docker-server.public_ip
}