import type {Entry} from '../entry';
import type {Field} from '../../index';

abstract class AbstractEntry implements Entry {

  private readonly __fields: Map<string, Field<unknown>> = new Map();

  private readonly __values: Map<Field<unknown>, unknown> = new Map();

  private readonly __size: number;

  public constructor(fieldValueMap: Map<Field<unknown>, unknown>) {
    this.__size = fieldValueMap.size;

    for(const [field, value] of fieldValueMap) {
      this.__fields.set(field.name, field);
      this.__values.set(field, value);
    }
  }

  public field(index: number): (Field<unknown> | undefined);
  public field(name: string): (Field<unknown> | undefined);
  public field(indexOrName: (number | string)): (Field<unknown> | undefined) {
    if(typeof indexOrName === 'number') {
      return this.fields[indexOrName];
    } else {
      return this.fieldsMap.get(indexOrName);
    }
  }

  public get<Type>(Field: Field<Type>): (Type | undefined);
  public get<Type>(Field: Field<Type>, defaultValue: Type): Type;
  public get<Type>(Field: Field<Type>, defaultValueProvider: (() => Type)): Type;
  public get(index: number): (unknown | undefined);
  public get<Type>(index: number, defaultValue: Type): Type;
  public get<Type>(index: number, defaultValueProvider: (() => Type)): Type;
  public get(name: string): (unknown | undefined);
  public get<Type>(name: string, defaultValue: Type): Type;
  public get<Type>(name: string, defaultValueProvider: (() => Type)): Type;
  public get<Type>(fieldOrIndexOrName: (number | string | Field<Type>), defaultValueOrProvider?: (Type | (() => Type))): (Type | unknown | undefined) {
    let defaultValueProvider: (() => (Type | undefined)) = (() => undefined);

    if(defaultValueOrProvider !== undefined) {
      if(typeof defaultValueOrProvider === 'function') {
        // @ts-expect-error: TS2349 because of the type guard above.
        defaultValueProvider = defaultValueOrProvider();
      } else {
        defaultValueProvider = ((): Type => defaultValueOrProvider);
      }
    }

    if(typeof fieldOrIndexOrName === 'number') {
      const field: (Field<unknown> | undefined) = this.field(fieldOrIndexOrName);

      if(field === undefined) {
        return defaultValueProvider();
      }

      return (this.valuesMap.get(field) as (Type | undefined));
    } else if(typeof fieldOrIndexOrName === 'string') {
      const field: (Field<unknown> | undefined) = this.field(fieldOrIndexOrName);

      if(field === undefined) {
        return defaultValueProvider();
      }

      return (this.valuesMap.get(field) as (Type | undefined));
    } else {
      const value: unknown = this.valuesMap.get(fieldOrIndexOrName);

      if(value === undefined) {
        return defaultValueProvider();
      }

      return value;
    }
  }

  // public get<Type>(field: Field<Type>): (Type | undefined) {
  //   return (this.valuesMap.get(field) as (Type | undefined));
  // }

  public set<Type>(field: Field<Type>, value: (Type | undefined)): void {
    if(value === undefined) {
      this.valuesMap.delete(field);
    } else {
      this.valuesMap.set(field, value);
    }
  }

  protected get fieldsMap(): Map<string, Field<unknown>> {
    return this.__fields;
  }

  protected get valuesMap(): Map<Field<unknown>, unknown> {
    return this.__values;
  }

  public get fields(): Field<unknown>[] {
    return Array.from(this.fieldsMap.values());
  }

  public get size(): number {
    return this.__size;
  }

}

export {
  AbstractEntry
};
