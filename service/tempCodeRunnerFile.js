import path from "path"
import fs from "fs"




const dirName = import.meta.dirname
const prouductFilePath = path.join(dirName, "database", "products.json")
console.log(prouductFilePath);