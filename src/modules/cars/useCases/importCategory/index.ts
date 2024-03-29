import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoiresRepository = CategoriesRepository.getInstace()
const importCategoryUseCase = new ImportCategoryUseCase(categoiresRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export {importCategoryController}
