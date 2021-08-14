variable "region" {
  type        = string
  default     = "asia-southeast1"
  description = "Google Cloud Region, defaults to __asia-southeast1__"
}

variable "vpc_name" {
  type        = string
  default     = "gloo"
  description = "The gloo mesh VPC name"
}

variable "subnet_name" {
  type        = string
  default     = "gloo"
  description = "The goo mesh cluster subnet name"
}

variable "num_nodes" {
  description = "Number of nodes in GKE per cluster"
  default     = 3
}

variable "istio_auth" {
  type        = string
  default     = "AUTH_NONE"
  description = "The Istio authentication mode, default is __AUTH_NONE__ other value is AUTH_MUTUAL_TLS"
}

# gloo mesh clusters
variable "gloo_clusters" {
  description = "Gloo Mesh Clusters"
  type        = map(any)
  default = {
    gloo : {
      region       = "asia-south1"
      machine_type = "n2-standard-4"
      num_nodes    = 3
      role         = "management"
      istio        = true
    }
  }
}