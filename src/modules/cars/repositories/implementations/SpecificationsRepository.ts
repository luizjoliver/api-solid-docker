
import { Specification } from "../../model/Specification";
import { ISpecificationDTO, ISpecificationRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationRepository{
    private specifications :Specification[]

    constructor(){
        this.specifications = []
    }
   
    
    create({ name, description }: ISpecificationDTO): void {
        const specification = new Specification()

        Object.assign(specification,{name,description,created_At:new Date()})

        this.specifications.push(specification)
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find((specification) => specification.name === name)
        return specification
    }
}

export {SpecificationsRepository}