import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uui } from "uuid";
import expose, { Expose } from 'class-transformer';
 
@Entity("tags")
class Tag {
  @PrimaryColumn()
  readonly id: string
  
  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Expose({ name: "nameCustom" })
  nameCustom(): string {
    return `#${this.name}`
  }

  constructor() {
    if (!this.id) {
      this.id = uui()
    }
  }
}

export { Tag }