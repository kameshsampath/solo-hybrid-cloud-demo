provider "civo" {
  token = var.api_token
}

data "civo_kubernetes_version" "stable" {
  filter {
    key    = "type"
    values = ["stable"]
  }
}

resource "civo_kubernetes_cluster" "gloo" {
  for_each = var.gloo_clusters

  name               = "gloo-${each.key}"
  region             = each.value.region
  num_target_nodes   = each.value.num_nodes
  target_nodes_size  = each.value.target_nodes_size
  tags               = join(",", ["gloo", each.value.role])
  applications       = join(",", each.value.apps)
  kubernetes_version = element(data.civo_kubernetes_version.stable.versions, 0).version
}