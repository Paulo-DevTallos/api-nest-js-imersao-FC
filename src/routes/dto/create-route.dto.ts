/**
 * Data transfer object
 * 
 * Só serve para transitar dados. Não contém 
 * logica nem regras de negócio
 */
export class CreateRouteDto {
    name: string;
    source_id: string;
    destination_id: string;
}
