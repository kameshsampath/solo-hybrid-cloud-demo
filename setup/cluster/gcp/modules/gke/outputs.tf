output "kubernetes_cluster_names" {
  value       = tomap({ (var.gloo_cluster_name) : google_container_cluster.gloo[var.gloo_cluster_name].name })
  description = "GKE Cluster Names"
}

# output "kubernetes_cluster_host" {
#   value       = google_container_cluster.gloo.endpoint
#   description = "GKE Host"
# }

# output "kubernetes_cluster_zone" {
#   value       = google_container_cluster.gloo.location
#   description = "GKE Zone"
# }