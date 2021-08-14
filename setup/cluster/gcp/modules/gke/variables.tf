variable "kubernetes_version" {
  type        = string
  default     = "1.20"
  description = "The Kubernetes version to use"
}

variable "gloo_role" {
  description = "The role of the cluster management or workload"
}

variable "gloo_cluster_name" {
  description = "The GKE Gloo Cluster Name"
}

variable "gloo_cluster_region" {
  description = "The GKE Gloo Cluster Region"
}

variable "gloo_machine_type" {
  description = "The GCP region of the gloo cluster"
}

variable "gloo_num_nodes" {
  description = "Number of nodes in GKE cluster"
  default     = 3
}

locals {
  google_zone = data.google_compute_zones.available.names[0]
}