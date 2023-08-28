import { workerData, parentPort } from "worker_threads";

console.log("Technical Articles on " + workerData);
if (parentPort !== null) {
    parentPort.postMessage({ fileName: workerData, status: "Done" });
}
console.log(__dirname);
