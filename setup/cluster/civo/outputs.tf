output "kubeconfig" {
  description = "the kubeconfig of the created cluster(s)"
  value = { for p in sort(keys(var.gloo_clusters)) : p =>
  civo_kubernetes_cluster.gloo[p].kubeconfig }
}