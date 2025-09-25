import { runFactory } from "./factory/main";
import { runSoporte } from "./observer";
import { runSingleton } from "./singleton"

(
  async()=>{
    await runSingleton()
    // await runFactory()
    await runSoporte()
  }
)();