import { ICommonJobItem } from "../common.type"

export interface ICastItem extends ICommonJobItem {
  cast_id: number
  character: string
  order: number

}

export interface ICrewItem extends ICommonJobItem {
  department: string
  job: string
}

export interface ICreditResponse {
  id: number
  cast: ICastItem[]
  crew: ICrewItem[]
}