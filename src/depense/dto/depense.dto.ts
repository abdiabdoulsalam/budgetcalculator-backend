/* eslint-disable prettier/prettier */
import { Column } from "typeorm";

export class Depensedto {
  @Column()
  titre: string;

  @Column()
  montant: number;
}
