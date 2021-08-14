# This is used to set local variable google_zone.
# This can be replaced with a statically-configured zone, if preferred.
data "google_compute_zones" "available" {
  region = var.gloo_cluster_region
}

data "google_container_engine_versions" "supported" {
  location       = local.google_zone
  version_prefix = var.kubernetes_version
}

# Gloo Mesh Cluster
resource "google_container_cluster" "gloo" {
  provider           = google-beta
  name               = var.gloo_cluster_name
  location           = local.google_zone
  min_master_version = data.google_container_engine_versions.supported.latest_master_version

  node_locations = [
    data.google_compute_zones.available.names[1],
  ]

  # We can't create a cluster with no node pool defined, but we want to only use
  # separately managed node pools. So we create the smallest possible default
  # node pool and immediately delete it.
  remove_default_node_pool = true
  initial_node_count       = 1

  ## Network config 
  network    = google_compute_network.vpc.name
  subnetwork = google_compute_subnetwork.subnet.name

}

resource "google_container_node_pool" "gloo_nodes" {
  name       = "${google_container_cluster.gloo.name}-node-pool"
  location   = data.google_compute_zones.available.names[1]
  cluster    = google_container_cluster.gloo.name
  node_count = 3

  node_config {
    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]

    labels = {
      app  = "gloo"
      role = "${var.gloo_role}"
    }

    machine_type = var.gloo_machine_type
    tags         = ["gloo", "${var.gloo_role}"]

    metadata = {
      disable-legacy-endpoints = "true"
    }
  }
}