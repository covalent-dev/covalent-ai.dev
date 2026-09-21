#!/usr/bin/env bash
# Serve the three design variants side by side.
# Usage: ./variants/preview.sh   (Ctrl-C stops all three)
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
pids=()

cleanup() {
  for pid in "${pids[@]:-}"; do
    kill "$pid" 2>/dev/null || true
  done
}
trap cleanup EXIT INT TERM

for pair in "8101:a" "8102:b" "8103:c"; do
  port="${pair%%:*}"
  variant="${pair##*:}"
  python3 -m http.server "$port" -d "$root/$variant" >/dev/null 2>&1 &
  pids+=("$!")
done

sleep 1

echo "variant A — glow       http://localhost:8101/"
echo "variant B — editorial  http://localhost:8102/"
echo "variant C — studio     http://localhost:8103/"
echo
echo "Ctrl-C stops all three."

wait
