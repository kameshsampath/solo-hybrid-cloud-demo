api_token = "mZsPyeCND6xdS0T0zlWItAbBv1GkYR472ErUniQOMwL8fapJcH"
gloo_clusters = {
  gm-mgmt : {
    region            = "LON1"
    target_nodes_size = "g3.k3s.large"
    num_nodes         = 1
    role              = "management"
    apps              = ["-Traefik"]
  }
  gm-cluster-1 : {
    region            = "LON1"
    target_nodes_size = "g3.k3s.large"
    num_nodes         = 2
    role              = "mesh"
    apps              = ["-Traefik"]
  }
  gm-cluster-2 : {
    region            = "LON1"
    target_nodes_size = "g3.k3s.large"
    num_nodes         = 2
    role              = "mesh"
    apps              = ["-Traefik"]
  }
}