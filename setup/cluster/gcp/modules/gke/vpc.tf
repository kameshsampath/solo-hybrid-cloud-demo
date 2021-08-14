# VPC
resource "google_compute_network" "vpc" {
  name                    = "${var.gloo_cluster_name}-vpc"
  auto_create_subnetworks = "false"
}

# Subnet
resource "google_compute_subnetwork" "subnet" {
  name          = "${var.gloo_cluster_name}-subnet"
  region        = var.gloo_cluster_region
  network       = google_compute_network.vpc.name
  ip_cidr_range = "10.10.0.0/24"
}