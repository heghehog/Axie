// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Axie extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Axie entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Axie entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Axie", id.toString(), this);
  }

  static load(id: string): Axie | null {
    return store.get("Axie", id) as Axie | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): BigInt {
    let value = this.get("name");
    return value.toBigInt();
  }

  set name(value: BigInt) {
    this.set("name", Value.fromBigInt(value));
  }

  get genes(): BigInt {
    let value = this.get("genes");
    return value.toBigInt();
  }

  set genes(value: BigInt) {
    this.set("genes", Value.fromBigInt(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get birthTime(): BigInt {
    let value = this.get("birthTime");
    return value.toBigInt();
  }

  set birthTime(value: BigInt) {
    this.set("birthTime", Value.fromBigInt(value));
  }

  get evolvingTime(): BigInt | null {
    let value = this.get("evolvingTime");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set evolvingTime(value: BigInt | null) {
    if (value === null) {
      this.unset("evolvingTime");
    } else {
      this.set("evolvingTime", Value.fromBigInt(value as BigInt));
    }
  }
}

export class TransferEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferEntity", id.toString(), this);
  }

  static load(id: string): TransferEntity | null {
    return store.get("TransferEntity", id) as TransferEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get AxieNumber(): BigInt {
    let value = this.get("AxieNumber");
    return value.toBigInt();
  }

  set AxieNumber(value: BigInt) {
    this.set("AxieNumber", Value.fromBigInt(value));
  }

  get src(): Bytes {
    let value = this.get("src");
    return value.toBytes();
  }

  set src(value: Bytes) {
    this.set("src", Value.fromBytes(value));
  }

  get dst(): Bytes {
    let value = this.get("dst");
    return value.toBytes();
  }

  set dst(value: Bytes) {
    this.set("dst", Value.fromBytes(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get quantityAxies(): BigInt {
    let value = this.get("quantityAxies");
    return value.toBigInt();
  }

  set quantityAxies(value: BigInt) {
    this.set("quantityAxies", Value.fromBigInt(value));
  }

  get CreatorOfAxies(): Array<string> {
    let value = this.get("CreatorOfAxies");
    return value.toStringArray();
  }

  set CreatorOfAxies(value: Array<string>) {
    this.set("CreatorOfAxies", Value.fromStringArray(value));
  }
}
