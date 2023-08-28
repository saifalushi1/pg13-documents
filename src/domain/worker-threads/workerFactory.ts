import { Worker } from "worker_threads";
function runService(workerData: string) {
    return new Promise((resolve, reject) => {
        const worker = new Worker("./parser.js", {});
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", (code) => {
            if (code !== 0)
                reject(
                    new Error(
                        `Stopped the Worker Thread with the exit code: ${code}`,
                    ),
                );
        });
    });
}

export async function run() {
    const result = await runService("test");
    console.log(result);
}

run().catch((err) => console.log(err));
