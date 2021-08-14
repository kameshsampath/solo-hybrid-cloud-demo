output "kubernetes_cluster_name" {
  # value       = google_container_cluster.gloo.name
  value       = { for k in sort(keys(var.gloo_clusters)) : k => module.gloo-cluster[k].kubernetes_cluster_names }
  description = "GKE Cluster Name"
}
