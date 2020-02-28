import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
 stages: [
    { duration: "30s", target: 30 },
    { duration: "30s", target: 300 },
    { duration: "30s", target: 3000 },
  ]
};

export default function() {
  let res = http.get("http://ec2-18-219-161-251.us-east-2.compute.amazonaws.com:3001/");
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
  sleep(.1);
}