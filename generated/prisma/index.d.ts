
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Boleto
 * 
 */
export type Boleto = $Result.DefaultSelection<Prisma.$BoletoPayload>
/**
 * Model Sorteo
 * 
 */
export type Sorteo = $Result.DefaultSelection<Prisma.$SorteoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boleto`: Exposes CRUD operations for the **Boleto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boletos
    * const boletos = await prisma.boleto.findMany()
    * ```
    */
  get boleto(): Prisma.BoletoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sorteo`: Exposes CRUD operations for the **Sorteo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sorteos
    * const sorteos = await prisma.sorteo.findMany()
    * ```
    */
  get sorteo(): Prisma.SorteoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Boleto: 'Boleto',
    Sorteo: 'Sorteo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "boleto" | "sorteo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Boleto: {
        payload: Prisma.$BoletoPayload<ExtArgs>
        fields: Prisma.BoletoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoletoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoletoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          findFirst: {
            args: Prisma.BoletoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoletoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          findMany: {
            args: Prisma.BoletoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>[]
          }
          create: {
            args: Prisma.BoletoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          createMany: {
            args: Prisma.BoletoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoletoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>[]
          }
          delete: {
            args: Prisma.BoletoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          update: {
            args: Prisma.BoletoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          deleteMany: {
            args: Prisma.BoletoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoletoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoletoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>[]
          }
          upsert: {
            args: Prisma.BoletoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoletoPayload>
          }
          aggregate: {
            args: Prisma.BoletoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoleto>
          }
          groupBy: {
            args: Prisma.BoletoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoletoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoletoCountArgs<ExtArgs>
            result: $Utils.Optional<BoletoCountAggregateOutputType> | number
          }
        }
      }
      Sorteo: {
        payload: Prisma.$SorteoPayload<ExtArgs>
        fields: Prisma.SorteoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SorteoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SorteoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteoPayload>
          }
          findFirst: {
            args: Prisma.SorteoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SorteoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteoPayload>
          }
          findMany: {
            args: Prisma.SorteoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteoPayload>[]
          }
          create: {
            args: Prisma.SorteoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteoPayload>
          }
          createMany: {
            args: Prisma.SorteoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SorteoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteoPayload>[]
          }
          delete: {
            args: Prisma.SorteoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteoPayload>
          }
          update: {
            args: Prisma.SorteoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteoPayload>
          }
          deleteMany: {
            args: Prisma.SorteoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SorteoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SorteoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteoPayload>[]
          }
          upsert: {
            args: Prisma.SorteoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteoPayload>
          }
          aggregate: {
            args: Prisma.SorteoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSorteo>
          }
          groupBy: {
            args: Prisma.SorteoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SorteoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SorteoCountArgs<ExtArgs>
            result: $Utils.Optional<SorteoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    boleto?: BoletoOmit
    sorteo?: SorteoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    boletos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | UserCountOutputTypeCountBoletosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoletoWhereInput
  }


  /**
   * Count Type SorteoCountOutputType
   */

  export type SorteoCountOutputType = {
    boletos: number
  }

  export type SorteoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | SorteoCountOutputTypeCountBoletosArgs
  }

  // Custom InputTypes
  /**
   * SorteoCountOutputType without action
   */
  export type SorteoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteoCountOutputType
     */
    select?: SorteoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SorteoCountOutputType without action
   */
  export type SorteoCountOutputTypeCountBoletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoletoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    boletos?: boolean | User$boletosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | User$boletosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      boletos: Prisma.$BoletoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boletos<T extends User$boletosArgs<ExtArgs> = {}>(args?: Subset<T, User$boletosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.boletos
   */
  export type User$boletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    where?: BoletoWhereInput
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    cursor?: BoletoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Boleto
   */

  export type AggregateBoleto = {
    _count: BoletoCountAggregateOutputType | null
    _avg: BoletoAvgAggregateOutputType | null
    _sum: BoletoSumAggregateOutputType | null
    _min: BoletoMinAggregateOutputType | null
    _max: BoletoMaxAggregateOutputType | null
  }

  export type BoletoAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    userId: number | null
    sorteoId: number | null
  }

  export type BoletoSumAggregateOutputType = {
    id: number | null
    numero: number | null
    userId: number | null
    sorteoId: number | null
  }

  export type BoletoMinAggregateOutputType = {
    id: number | null
    numero: number | null
    vendido: boolean | null
    userId: number | null
    sorteoId: number | null
  }

  export type BoletoMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    vendido: boolean | null
    userId: number | null
    sorteoId: number | null
  }

  export type BoletoCountAggregateOutputType = {
    id: number
    numero: number
    vendido: number
    userId: number
    sorteoId: number
    _all: number
  }


  export type BoletoAvgAggregateInputType = {
    id?: true
    numero?: true
    userId?: true
    sorteoId?: true
  }

  export type BoletoSumAggregateInputType = {
    id?: true
    numero?: true
    userId?: true
    sorteoId?: true
  }

  export type BoletoMinAggregateInputType = {
    id?: true
    numero?: true
    vendido?: true
    userId?: true
    sorteoId?: true
  }

  export type BoletoMaxAggregateInputType = {
    id?: true
    numero?: true
    vendido?: true
    userId?: true
    sorteoId?: true
  }

  export type BoletoCountAggregateInputType = {
    id?: true
    numero?: true
    vendido?: true
    userId?: true
    sorteoId?: true
    _all?: true
  }

  export type BoletoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boleto to aggregate.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boletos
    **/
    _count?: true | BoletoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoletoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoletoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoletoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoletoMaxAggregateInputType
  }

  export type GetBoletoAggregateType<T extends BoletoAggregateArgs> = {
        [P in keyof T & keyof AggregateBoleto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoleto[P]>
      : GetScalarType<T[P], AggregateBoleto[P]>
  }




  export type BoletoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoletoWhereInput
    orderBy?: BoletoOrderByWithAggregationInput | BoletoOrderByWithAggregationInput[]
    by: BoletoScalarFieldEnum[] | BoletoScalarFieldEnum
    having?: BoletoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoletoCountAggregateInputType | true
    _avg?: BoletoAvgAggregateInputType
    _sum?: BoletoSumAggregateInputType
    _min?: BoletoMinAggregateInputType
    _max?: BoletoMaxAggregateInputType
  }

  export type BoletoGroupByOutputType = {
    id: number
    numero: number
    vendido: boolean
    userId: number | null
    sorteoId: number | null
    _count: BoletoCountAggregateOutputType | null
    _avg: BoletoAvgAggregateOutputType | null
    _sum: BoletoSumAggregateOutputType | null
    _min: BoletoMinAggregateOutputType | null
    _max: BoletoMaxAggregateOutputType | null
  }

  type GetBoletoGroupByPayload<T extends BoletoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoletoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoletoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoletoGroupByOutputType[P]>
            : GetScalarType<T[P], BoletoGroupByOutputType[P]>
        }
      >
    >


  export type BoletoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    vendido?: boolean
    userId?: boolean
    sorteoId?: boolean
    user?: boolean | Boleto$userArgs<ExtArgs>
    sorteo?: boolean | Boleto$sorteoArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>

  export type BoletoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    vendido?: boolean
    userId?: boolean
    sorteoId?: boolean
    user?: boolean | Boleto$userArgs<ExtArgs>
    sorteo?: boolean | Boleto$sorteoArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>

  export type BoletoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    vendido?: boolean
    userId?: boolean
    sorteoId?: boolean
    user?: boolean | Boleto$userArgs<ExtArgs>
    sorteo?: boolean | Boleto$sorteoArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>

  export type BoletoSelectScalar = {
    id?: boolean
    numero?: boolean
    vendido?: boolean
    userId?: boolean
    sorteoId?: boolean
  }

  export type BoletoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "vendido" | "userId" | "sorteoId", ExtArgs["result"]["boleto"]>
  export type BoletoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Boleto$userArgs<ExtArgs>
    sorteo?: boolean | Boleto$sorteoArgs<ExtArgs>
  }
  export type BoletoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Boleto$userArgs<ExtArgs>
    sorteo?: boolean | Boleto$sorteoArgs<ExtArgs>
  }
  export type BoletoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Boleto$userArgs<ExtArgs>
    sorteo?: boolean | Boleto$sorteoArgs<ExtArgs>
  }

  export type $BoletoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Boleto"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      sorteo: Prisma.$SorteoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      vendido: boolean
      userId: number | null
      sorteoId: number | null
    }, ExtArgs["result"]["boleto"]>
    composites: {}
  }

  type BoletoGetPayload<S extends boolean | null | undefined | BoletoDefaultArgs> = $Result.GetResult<Prisma.$BoletoPayload, S>

  type BoletoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoletoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoletoCountAggregateInputType | true
    }

  export interface BoletoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Boleto'], meta: { name: 'Boleto' } }
    /**
     * Find zero or one Boleto that matches the filter.
     * @param {BoletoFindUniqueArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoletoFindUniqueArgs>(args: SelectSubset<T, BoletoFindUniqueArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Boleto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoletoFindUniqueOrThrowArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoletoFindUniqueOrThrowArgs>(args: SelectSubset<T, BoletoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boleto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoFindFirstArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoletoFindFirstArgs>(args?: SelectSubset<T, BoletoFindFirstArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Boleto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoFindFirstOrThrowArgs} args - Arguments to find a Boleto
     * @example
     * // Get one Boleto
     * const boleto = await prisma.boleto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoletoFindFirstOrThrowArgs>(args?: SelectSubset<T, BoletoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boletos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boletos
     * const boletos = await prisma.boleto.findMany()
     * 
     * // Get first 10 Boletos
     * const boletos = await prisma.boleto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boletoWithIdOnly = await prisma.boleto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoletoFindManyArgs>(args?: SelectSubset<T, BoletoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Boleto.
     * @param {BoletoCreateArgs} args - Arguments to create a Boleto.
     * @example
     * // Create one Boleto
     * const Boleto = await prisma.boleto.create({
     *   data: {
     *     // ... data to create a Boleto
     *   }
     * })
     * 
     */
    create<T extends BoletoCreateArgs>(args: SelectSubset<T, BoletoCreateArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boletos.
     * @param {BoletoCreateManyArgs} args - Arguments to create many Boletos.
     * @example
     * // Create many Boletos
     * const boleto = await prisma.boleto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoletoCreateManyArgs>(args?: SelectSubset<T, BoletoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boletos and returns the data saved in the database.
     * @param {BoletoCreateManyAndReturnArgs} args - Arguments to create many Boletos.
     * @example
     * // Create many Boletos
     * const boleto = await prisma.boleto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boletos and only return the `id`
     * const boletoWithIdOnly = await prisma.boleto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoletoCreateManyAndReturnArgs>(args?: SelectSubset<T, BoletoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Boleto.
     * @param {BoletoDeleteArgs} args - Arguments to delete one Boleto.
     * @example
     * // Delete one Boleto
     * const Boleto = await prisma.boleto.delete({
     *   where: {
     *     // ... filter to delete one Boleto
     *   }
     * })
     * 
     */
    delete<T extends BoletoDeleteArgs>(args: SelectSubset<T, BoletoDeleteArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Boleto.
     * @param {BoletoUpdateArgs} args - Arguments to update one Boleto.
     * @example
     * // Update one Boleto
     * const boleto = await prisma.boleto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoletoUpdateArgs>(args: SelectSubset<T, BoletoUpdateArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boletos.
     * @param {BoletoDeleteManyArgs} args - Arguments to filter Boletos to delete.
     * @example
     * // Delete a few Boletos
     * const { count } = await prisma.boleto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoletoDeleteManyArgs>(args?: SelectSubset<T, BoletoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boletos
     * const boleto = await prisma.boleto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoletoUpdateManyArgs>(args: SelectSubset<T, BoletoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boletos and returns the data updated in the database.
     * @param {BoletoUpdateManyAndReturnArgs} args - Arguments to update many Boletos.
     * @example
     * // Update many Boletos
     * const boleto = await prisma.boleto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boletos and only return the `id`
     * const boletoWithIdOnly = await prisma.boleto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoletoUpdateManyAndReturnArgs>(args: SelectSubset<T, BoletoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Boleto.
     * @param {BoletoUpsertArgs} args - Arguments to update or create a Boleto.
     * @example
     * // Update or create a Boleto
     * const boleto = await prisma.boleto.upsert({
     *   create: {
     *     // ... data to create a Boleto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boleto we want to update
     *   }
     * })
     */
    upsert<T extends BoletoUpsertArgs>(args: SelectSubset<T, BoletoUpsertArgs<ExtArgs>>): Prisma__BoletoClient<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boletos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoCountArgs} args - Arguments to filter Boletos to count.
     * @example
     * // Count the number of Boletos
     * const count = await prisma.boleto.count({
     *   where: {
     *     // ... the filter for the Boletos we want to count
     *   }
     * })
    **/
    count<T extends BoletoCountArgs>(
      args?: Subset<T, BoletoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoletoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boleto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoletoAggregateArgs>(args: Subset<T, BoletoAggregateArgs>): Prisma.PrismaPromise<GetBoletoAggregateType<T>>

    /**
     * Group by Boleto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoletoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoletoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoletoGroupByArgs['orderBy'] }
        : { orderBy?: BoletoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoletoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoletoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Boleto model
   */
  readonly fields: BoletoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Boleto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoletoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Boleto$userArgs<ExtArgs> = {}>(args?: Subset<T, Boleto$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sorteo<T extends Boleto$sorteoArgs<ExtArgs> = {}>(args?: Subset<T, Boleto$sorteoArgs<ExtArgs>>): Prisma__SorteoClient<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Boleto model
   */
  interface BoletoFieldRefs {
    readonly id: FieldRef<"Boleto", 'Int'>
    readonly numero: FieldRef<"Boleto", 'Int'>
    readonly vendido: FieldRef<"Boleto", 'Boolean'>
    readonly userId: FieldRef<"Boleto", 'Int'>
    readonly sorteoId: FieldRef<"Boleto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Boleto findUnique
   */
  export type BoletoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto findUniqueOrThrow
   */
  export type BoletoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto findFirst
   */
  export type BoletoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boletos.
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boletos.
     */
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Boleto findFirstOrThrow
   */
  export type BoletoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boleto to fetch.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boletos.
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boletos.
     */
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Boleto findMany
   */
  export type BoletoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter, which Boletos to fetch.
     */
    where?: BoletoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boletos to fetch.
     */
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boletos.
     */
    cursor?: BoletoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boletos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boletos.
     */
    skip?: number
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Boleto create
   */
  export type BoletoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * The data needed to create a Boleto.
     */
    data: XOR<BoletoCreateInput, BoletoUncheckedCreateInput>
  }

  /**
   * Boleto createMany
   */
  export type BoletoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boletos.
     */
    data: BoletoCreateManyInput | BoletoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Boleto createManyAndReturn
   */
  export type BoletoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * The data used to create many Boletos.
     */
    data: BoletoCreateManyInput | BoletoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Boleto update
   */
  export type BoletoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * The data needed to update a Boleto.
     */
    data: XOR<BoletoUpdateInput, BoletoUncheckedUpdateInput>
    /**
     * Choose, which Boleto to update.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto updateMany
   */
  export type BoletoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boletos.
     */
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyInput>
    /**
     * Filter which Boletos to update
     */
    where?: BoletoWhereInput
    /**
     * Limit how many Boletos to update.
     */
    limit?: number
  }

  /**
   * Boleto updateManyAndReturn
   */
  export type BoletoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * The data used to update Boletos.
     */
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyInput>
    /**
     * Filter which Boletos to update
     */
    where?: BoletoWhereInput
    /**
     * Limit how many Boletos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Boleto upsert
   */
  export type BoletoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * The filter to search for the Boleto to update in case it exists.
     */
    where: BoletoWhereUniqueInput
    /**
     * In case the Boleto found by the `where` argument doesn't exist, create a new Boleto with this data.
     */
    create: XOR<BoletoCreateInput, BoletoUncheckedCreateInput>
    /**
     * In case the Boleto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoletoUpdateInput, BoletoUncheckedUpdateInput>
  }

  /**
   * Boleto delete
   */
  export type BoletoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    /**
     * Filter which Boleto to delete.
     */
    where: BoletoWhereUniqueInput
  }

  /**
   * Boleto deleteMany
   */
  export type BoletoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boletos to delete
     */
    where?: BoletoWhereInput
    /**
     * Limit how many Boletos to delete.
     */
    limit?: number
  }

  /**
   * Boleto.user
   */
  export type Boleto$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Boleto.sorteo
   */
  export type Boleto$sorteoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteoInclude<ExtArgs> | null
    where?: SorteoWhereInput
  }

  /**
   * Boleto without action
   */
  export type BoletoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
  }


  /**
   * Model Sorteo
   */

  export type AggregateSorteo = {
    _count: SorteoCountAggregateOutputType | null
    _avg: SorteoAvgAggregateOutputType | null
    _sum: SorteoSumAggregateOutputType | null
    _min: SorteoMinAggregateOutputType | null
    _max: SorteoMaxAggregateOutputType | null
  }

  export type SorteoAvgAggregateOutputType = {
    id: number | null
  }

  export type SorteoSumAggregateOutputType = {
    id: number | null
  }

  export type SorteoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha: Date | null
  }

  export type SorteoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha: Date | null
  }

  export type SorteoCountAggregateOutputType = {
    id: number
    nombre: number
    fecha: number
    _all: number
  }


  export type SorteoAvgAggregateInputType = {
    id?: true
  }

  export type SorteoSumAggregateInputType = {
    id?: true
  }

  export type SorteoMinAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
  }

  export type SorteoMaxAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
  }

  export type SorteoCountAggregateInputType = {
    id?: true
    nombre?: true
    fecha?: true
    _all?: true
  }

  export type SorteoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sorteo to aggregate.
     */
    where?: SorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteos to fetch.
     */
    orderBy?: SorteoOrderByWithRelationInput | SorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sorteos
    **/
    _count?: true | SorteoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SorteoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SorteoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SorteoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SorteoMaxAggregateInputType
  }

  export type GetSorteoAggregateType<T extends SorteoAggregateArgs> = {
        [P in keyof T & keyof AggregateSorteo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSorteo[P]>
      : GetScalarType<T[P], AggregateSorteo[P]>
  }




  export type SorteoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SorteoWhereInput
    orderBy?: SorteoOrderByWithAggregationInput | SorteoOrderByWithAggregationInput[]
    by: SorteoScalarFieldEnum[] | SorteoScalarFieldEnum
    having?: SorteoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SorteoCountAggregateInputType | true
    _avg?: SorteoAvgAggregateInputType
    _sum?: SorteoSumAggregateInputType
    _min?: SorteoMinAggregateInputType
    _max?: SorteoMaxAggregateInputType
  }

  export type SorteoGroupByOutputType = {
    id: number
    nombre: string
    fecha: Date
    _count: SorteoCountAggregateOutputType | null
    _avg: SorteoAvgAggregateOutputType | null
    _sum: SorteoSumAggregateOutputType | null
    _min: SorteoMinAggregateOutputType | null
    _max: SorteoMaxAggregateOutputType | null
  }

  type GetSorteoGroupByPayload<T extends SorteoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SorteoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SorteoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SorteoGroupByOutputType[P]>
            : GetScalarType<T[P], SorteoGroupByOutputType[P]>
        }
      >
    >


  export type SorteoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha?: boolean
    boletos?: boolean | Sorteo$boletosArgs<ExtArgs>
    _count?: boolean | SorteoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sorteo"]>

  export type SorteoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["sorteo"]>

  export type SorteoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["sorteo"]>

  export type SorteoSelectScalar = {
    id?: boolean
    nombre?: boolean
    fecha?: boolean
  }

  export type SorteoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "fecha", ExtArgs["result"]["sorteo"]>
  export type SorteoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | Sorteo$boletosArgs<ExtArgs>
    _count?: boolean | SorteoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SorteoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SorteoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SorteoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sorteo"
    objects: {
      boletos: Prisma.$BoletoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      fecha: Date
    }, ExtArgs["result"]["sorteo"]>
    composites: {}
  }

  type SorteoGetPayload<S extends boolean | null | undefined | SorteoDefaultArgs> = $Result.GetResult<Prisma.$SorteoPayload, S>

  type SorteoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SorteoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SorteoCountAggregateInputType | true
    }

  export interface SorteoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sorteo'], meta: { name: 'Sorteo' } }
    /**
     * Find zero or one Sorteo that matches the filter.
     * @param {SorteoFindUniqueArgs} args - Arguments to find a Sorteo
     * @example
     * // Get one Sorteo
     * const sorteo = await prisma.sorteo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SorteoFindUniqueArgs>(args: SelectSubset<T, SorteoFindUniqueArgs<ExtArgs>>): Prisma__SorteoClient<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sorteo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SorteoFindUniqueOrThrowArgs} args - Arguments to find a Sorteo
     * @example
     * // Get one Sorteo
     * const sorteo = await prisma.sorteo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SorteoFindUniqueOrThrowArgs>(args: SelectSubset<T, SorteoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SorteoClient<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sorteo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteoFindFirstArgs} args - Arguments to find a Sorteo
     * @example
     * // Get one Sorteo
     * const sorteo = await prisma.sorteo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SorteoFindFirstArgs>(args?: SelectSubset<T, SorteoFindFirstArgs<ExtArgs>>): Prisma__SorteoClient<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sorteo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteoFindFirstOrThrowArgs} args - Arguments to find a Sorteo
     * @example
     * // Get one Sorteo
     * const sorteo = await prisma.sorteo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SorteoFindFirstOrThrowArgs>(args?: SelectSubset<T, SorteoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SorteoClient<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sorteos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sorteos
     * const sorteos = await prisma.sorteo.findMany()
     * 
     * // Get first 10 Sorteos
     * const sorteos = await prisma.sorteo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sorteoWithIdOnly = await prisma.sorteo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SorteoFindManyArgs>(args?: SelectSubset<T, SorteoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sorteo.
     * @param {SorteoCreateArgs} args - Arguments to create a Sorteo.
     * @example
     * // Create one Sorteo
     * const Sorteo = await prisma.sorteo.create({
     *   data: {
     *     // ... data to create a Sorteo
     *   }
     * })
     * 
     */
    create<T extends SorteoCreateArgs>(args: SelectSubset<T, SorteoCreateArgs<ExtArgs>>): Prisma__SorteoClient<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sorteos.
     * @param {SorteoCreateManyArgs} args - Arguments to create many Sorteos.
     * @example
     * // Create many Sorteos
     * const sorteo = await prisma.sorteo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SorteoCreateManyArgs>(args?: SelectSubset<T, SorteoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sorteos and returns the data saved in the database.
     * @param {SorteoCreateManyAndReturnArgs} args - Arguments to create many Sorteos.
     * @example
     * // Create many Sorteos
     * const sorteo = await prisma.sorteo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sorteos and only return the `id`
     * const sorteoWithIdOnly = await prisma.sorteo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SorteoCreateManyAndReturnArgs>(args?: SelectSubset<T, SorteoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sorteo.
     * @param {SorteoDeleteArgs} args - Arguments to delete one Sorteo.
     * @example
     * // Delete one Sorteo
     * const Sorteo = await prisma.sorteo.delete({
     *   where: {
     *     // ... filter to delete one Sorteo
     *   }
     * })
     * 
     */
    delete<T extends SorteoDeleteArgs>(args: SelectSubset<T, SorteoDeleteArgs<ExtArgs>>): Prisma__SorteoClient<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sorteo.
     * @param {SorteoUpdateArgs} args - Arguments to update one Sorteo.
     * @example
     * // Update one Sorteo
     * const sorteo = await prisma.sorteo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SorteoUpdateArgs>(args: SelectSubset<T, SorteoUpdateArgs<ExtArgs>>): Prisma__SorteoClient<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sorteos.
     * @param {SorteoDeleteManyArgs} args - Arguments to filter Sorteos to delete.
     * @example
     * // Delete a few Sorteos
     * const { count } = await prisma.sorteo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SorteoDeleteManyArgs>(args?: SelectSubset<T, SorteoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sorteos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sorteos
     * const sorteo = await prisma.sorteo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SorteoUpdateManyArgs>(args: SelectSubset<T, SorteoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sorteos and returns the data updated in the database.
     * @param {SorteoUpdateManyAndReturnArgs} args - Arguments to update many Sorteos.
     * @example
     * // Update many Sorteos
     * const sorteo = await prisma.sorteo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sorteos and only return the `id`
     * const sorteoWithIdOnly = await prisma.sorteo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SorteoUpdateManyAndReturnArgs>(args: SelectSubset<T, SorteoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sorteo.
     * @param {SorteoUpsertArgs} args - Arguments to update or create a Sorteo.
     * @example
     * // Update or create a Sorteo
     * const sorteo = await prisma.sorteo.upsert({
     *   create: {
     *     // ... data to create a Sorteo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sorteo we want to update
     *   }
     * })
     */
    upsert<T extends SorteoUpsertArgs>(args: SelectSubset<T, SorteoUpsertArgs<ExtArgs>>): Prisma__SorteoClient<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sorteos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteoCountArgs} args - Arguments to filter Sorteos to count.
     * @example
     * // Count the number of Sorteos
     * const count = await prisma.sorteo.count({
     *   where: {
     *     // ... the filter for the Sorteos we want to count
     *   }
     * })
    **/
    count<T extends SorteoCountArgs>(
      args?: Subset<T, SorteoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SorteoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sorteo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SorteoAggregateArgs>(args: Subset<T, SorteoAggregateArgs>): Prisma.PrismaPromise<GetSorteoAggregateType<T>>

    /**
     * Group by Sorteo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SorteoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SorteoGroupByArgs['orderBy'] }
        : { orderBy?: SorteoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SorteoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSorteoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sorteo model
   */
  readonly fields: SorteoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sorteo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SorteoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boletos<T extends Sorteo$boletosArgs<ExtArgs> = {}>(args?: Subset<T, Sorteo$boletosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sorteo model
   */
  interface SorteoFieldRefs {
    readonly id: FieldRef<"Sorteo", 'Int'>
    readonly nombre: FieldRef<"Sorteo", 'String'>
    readonly fecha: FieldRef<"Sorteo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sorteo findUnique
   */
  export type SorteoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteoInclude<ExtArgs> | null
    /**
     * Filter, which Sorteo to fetch.
     */
    where: SorteoWhereUniqueInput
  }

  /**
   * Sorteo findUniqueOrThrow
   */
  export type SorteoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteoInclude<ExtArgs> | null
    /**
     * Filter, which Sorteo to fetch.
     */
    where: SorteoWhereUniqueInput
  }

  /**
   * Sorteo findFirst
   */
  export type SorteoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteoInclude<ExtArgs> | null
    /**
     * Filter, which Sorteo to fetch.
     */
    where?: SorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteos to fetch.
     */
    orderBy?: SorteoOrderByWithRelationInput | SorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sorteos.
     */
    cursor?: SorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sorteos.
     */
    distinct?: SorteoScalarFieldEnum | SorteoScalarFieldEnum[]
  }

  /**
   * Sorteo findFirstOrThrow
   */
  export type SorteoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteoInclude<ExtArgs> | null
    /**
     * Filter, which Sorteo to fetch.
     */
    where?: SorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteos to fetch.
     */
    orderBy?: SorteoOrderByWithRelationInput | SorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sorteos.
     */
    cursor?: SorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sorteos.
     */
    distinct?: SorteoScalarFieldEnum | SorteoScalarFieldEnum[]
  }

  /**
   * Sorteo findMany
   */
  export type SorteoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteoInclude<ExtArgs> | null
    /**
     * Filter, which Sorteos to fetch.
     */
    where?: SorteoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteos to fetch.
     */
    orderBy?: SorteoOrderByWithRelationInput | SorteoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sorteos.
     */
    cursor?: SorteoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteos.
     */
    skip?: number
    distinct?: SorteoScalarFieldEnum | SorteoScalarFieldEnum[]
  }

  /**
   * Sorteo create
   */
  export type SorteoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteoInclude<ExtArgs> | null
    /**
     * The data needed to create a Sorteo.
     */
    data: XOR<SorteoCreateInput, SorteoUncheckedCreateInput>
  }

  /**
   * Sorteo createMany
   */
  export type SorteoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sorteos.
     */
    data: SorteoCreateManyInput | SorteoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sorteo createManyAndReturn
   */
  export type SorteoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * The data used to create many Sorteos.
     */
    data: SorteoCreateManyInput | SorteoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sorteo update
   */
  export type SorteoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteoInclude<ExtArgs> | null
    /**
     * The data needed to update a Sorteo.
     */
    data: XOR<SorteoUpdateInput, SorteoUncheckedUpdateInput>
    /**
     * Choose, which Sorteo to update.
     */
    where: SorteoWhereUniqueInput
  }

  /**
   * Sorteo updateMany
   */
  export type SorteoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sorteos.
     */
    data: XOR<SorteoUpdateManyMutationInput, SorteoUncheckedUpdateManyInput>
    /**
     * Filter which Sorteos to update
     */
    where?: SorteoWhereInput
    /**
     * Limit how many Sorteos to update.
     */
    limit?: number
  }

  /**
   * Sorteo updateManyAndReturn
   */
  export type SorteoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * The data used to update Sorteos.
     */
    data: XOR<SorteoUpdateManyMutationInput, SorteoUncheckedUpdateManyInput>
    /**
     * Filter which Sorteos to update
     */
    where?: SorteoWhereInput
    /**
     * Limit how many Sorteos to update.
     */
    limit?: number
  }

  /**
   * Sorteo upsert
   */
  export type SorteoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteoInclude<ExtArgs> | null
    /**
     * The filter to search for the Sorteo to update in case it exists.
     */
    where: SorteoWhereUniqueInput
    /**
     * In case the Sorteo found by the `where` argument doesn't exist, create a new Sorteo with this data.
     */
    create: XOR<SorteoCreateInput, SorteoUncheckedCreateInput>
    /**
     * In case the Sorteo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SorteoUpdateInput, SorteoUncheckedUpdateInput>
  }

  /**
   * Sorteo delete
   */
  export type SorteoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteoInclude<ExtArgs> | null
    /**
     * Filter which Sorteo to delete.
     */
    where: SorteoWhereUniqueInput
  }

  /**
   * Sorteo deleteMany
   */
  export type SorteoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sorteos to delete
     */
    where?: SorteoWhereInput
    /**
     * Limit how many Sorteos to delete.
     */
    limit?: number
  }

  /**
   * Sorteo.boletos
   */
  export type Sorteo$boletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Boleto
     */
    select?: BoletoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Boleto
     */
    omit?: BoletoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoletoInclude<ExtArgs> | null
    where?: BoletoWhereInput
    orderBy?: BoletoOrderByWithRelationInput | BoletoOrderByWithRelationInput[]
    cursor?: BoletoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoletoScalarFieldEnum | BoletoScalarFieldEnum[]
  }

  /**
   * Sorteo without action
   */
  export type SorteoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteo
     */
    select?: SorteoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteo
     */
    omit?: SorteoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BoletoScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    vendido: 'vendido',
    userId: 'userId',
    sorteoId: 'sorteoId'
  };

  export type BoletoScalarFieldEnum = (typeof BoletoScalarFieldEnum)[keyof typeof BoletoScalarFieldEnum]


  export const SorteoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    fecha: 'fecha'
  };

  export type SorteoScalarFieldEnum = (typeof SorteoScalarFieldEnum)[keyof typeof SorteoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    boletos?: BoletoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    boletos?: BoletoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    boletos?: BoletoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BoletoWhereInput = {
    AND?: BoletoWhereInput | BoletoWhereInput[]
    OR?: BoletoWhereInput[]
    NOT?: BoletoWhereInput | BoletoWhereInput[]
    id?: IntFilter<"Boleto"> | number
    numero?: IntFilter<"Boleto"> | number
    vendido?: BoolFilter<"Boleto"> | boolean
    userId?: IntNullableFilter<"Boleto"> | number | null
    sorteoId?: IntNullableFilter<"Boleto"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sorteo?: XOR<SorteoNullableScalarRelationFilter, SorteoWhereInput> | null
  }

  export type BoletoOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    vendido?: SortOrder
    userId?: SortOrderInput | SortOrder
    sorteoId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    sorteo?: SorteoOrderByWithRelationInput
  }

  export type BoletoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoletoWhereInput | BoletoWhereInput[]
    OR?: BoletoWhereInput[]
    NOT?: BoletoWhereInput | BoletoWhereInput[]
    numero?: IntFilter<"Boleto"> | number
    vendido?: BoolFilter<"Boleto"> | boolean
    userId?: IntNullableFilter<"Boleto"> | number | null
    sorteoId?: IntNullableFilter<"Boleto"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sorteo?: XOR<SorteoNullableScalarRelationFilter, SorteoWhereInput> | null
  }, "id">

  export type BoletoOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    vendido?: SortOrder
    userId?: SortOrderInput | SortOrder
    sorteoId?: SortOrderInput | SortOrder
    _count?: BoletoCountOrderByAggregateInput
    _avg?: BoletoAvgOrderByAggregateInput
    _max?: BoletoMaxOrderByAggregateInput
    _min?: BoletoMinOrderByAggregateInput
    _sum?: BoletoSumOrderByAggregateInput
  }

  export type BoletoScalarWhereWithAggregatesInput = {
    AND?: BoletoScalarWhereWithAggregatesInput | BoletoScalarWhereWithAggregatesInput[]
    OR?: BoletoScalarWhereWithAggregatesInput[]
    NOT?: BoletoScalarWhereWithAggregatesInput | BoletoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Boleto"> | number
    numero?: IntWithAggregatesFilter<"Boleto"> | number
    vendido?: BoolWithAggregatesFilter<"Boleto"> | boolean
    userId?: IntNullableWithAggregatesFilter<"Boleto"> | number | null
    sorteoId?: IntNullableWithAggregatesFilter<"Boleto"> | number | null
  }

  export type SorteoWhereInput = {
    AND?: SorteoWhereInput | SorteoWhereInput[]
    OR?: SorteoWhereInput[]
    NOT?: SorteoWhereInput | SorteoWhereInput[]
    id?: IntFilter<"Sorteo"> | number
    nombre?: StringFilter<"Sorteo"> | string
    fecha?: DateTimeFilter<"Sorteo"> | Date | string
    boletos?: BoletoListRelationFilter
  }

  export type SorteoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    boletos?: BoletoOrderByRelationAggregateInput
  }

  export type SorteoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SorteoWhereInput | SorteoWhereInput[]
    OR?: SorteoWhereInput[]
    NOT?: SorteoWhereInput | SorteoWhereInput[]
    nombre?: StringFilter<"Sorteo"> | string
    fecha?: DateTimeFilter<"Sorteo"> | Date | string
    boletos?: BoletoListRelationFilter
  }, "id">

  export type SorteoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
    _count?: SorteoCountOrderByAggregateInput
    _avg?: SorteoAvgOrderByAggregateInput
    _max?: SorteoMaxOrderByAggregateInput
    _min?: SorteoMinOrderByAggregateInput
    _sum?: SorteoSumOrderByAggregateInput
  }

  export type SorteoScalarWhereWithAggregatesInput = {
    AND?: SorteoScalarWhereWithAggregatesInput | SorteoScalarWhereWithAggregatesInput[]
    OR?: SorteoScalarWhereWithAggregatesInput[]
    NOT?: SorteoScalarWhereWithAggregatesInput | SorteoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sorteo"> | number
    nombre?: StringWithAggregatesFilter<"Sorteo"> | string
    fecha?: DateTimeWithAggregatesFilter<"Sorteo"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    boletos?: BoletoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    boletos?: BoletoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoletoCreateInput = {
    numero: number
    vendido?: boolean
    user?: UserCreateNestedOneWithoutBoletosInput
    sorteo?: SorteoCreateNestedOneWithoutBoletosInput
  }

  export type BoletoUncheckedCreateInput = {
    id?: number
    numero: number
    vendido?: boolean
    userId?: number | null
    sorteoId?: number | null
  }

  export type BoletoUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    vendido?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutBoletosNestedInput
    sorteo?: SorteoUpdateOneWithoutBoletosNestedInput
  }

  export type BoletoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    vendido?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sorteoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BoletoCreateManyInput = {
    id?: number
    numero: number
    vendido?: boolean
    userId?: number | null
    sorteoId?: number | null
  }

  export type BoletoUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    vendido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoletoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    vendido?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    sorteoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SorteoCreateInput = {
    nombre: string
    fecha: Date | string
    boletos?: BoletoCreateNestedManyWithoutSorteoInput
  }

  export type SorteoUncheckedCreateInput = {
    id?: number
    nombre: string
    fecha: Date | string
    boletos?: BoletoUncheckedCreateNestedManyWithoutSorteoInput
  }

  export type SorteoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUpdateManyWithoutSorteoNestedInput
  }

  export type SorteoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUncheckedUpdateManyWithoutSorteoNestedInput
  }

  export type SorteoCreateManyInput = {
    id?: number
    nombre: string
    fecha: Date | string
  }

  export type SorteoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoletoListRelationFilter = {
    every?: BoletoWhereInput
    some?: BoletoWhereInput
    none?: BoletoWhereInput
  }

  export type BoletoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SorteoNullableScalarRelationFilter = {
    is?: SorteoWhereInput | null
    isNot?: SorteoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BoletoCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    vendido?: SortOrder
    userId?: SortOrder
    sorteoId?: SortOrder
  }

  export type BoletoAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    userId?: SortOrder
    sorteoId?: SortOrder
  }

  export type BoletoMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    vendido?: SortOrder
    userId?: SortOrder
    sorteoId?: SortOrder
  }

  export type BoletoMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    vendido?: SortOrder
    userId?: SortOrder
    sorteoId?: SortOrder
  }

  export type BoletoSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    userId?: SortOrder
    sorteoId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SorteoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
  }

  export type SorteoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SorteoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
  }

  export type SorteoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha?: SortOrder
  }

  export type SorteoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoletoCreateNestedManyWithoutUserInput = {
    create?: XOR<BoletoCreateWithoutUserInput, BoletoUncheckedCreateWithoutUserInput> | BoletoCreateWithoutUserInput[] | BoletoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutUserInput | BoletoCreateOrConnectWithoutUserInput[]
    createMany?: BoletoCreateManyUserInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type BoletoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BoletoCreateWithoutUserInput, BoletoUncheckedCreateWithoutUserInput> | BoletoCreateWithoutUserInput[] | BoletoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutUserInput | BoletoCreateOrConnectWithoutUserInput[]
    createMany?: BoletoCreateManyUserInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoletoUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoletoCreateWithoutUserInput, BoletoUncheckedCreateWithoutUserInput> | BoletoCreateWithoutUserInput[] | BoletoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutUserInput | BoletoCreateOrConnectWithoutUserInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutUserInput | BoletoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoletoCreateManyUserInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutUserInput | BoletoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutUserInput | BoletoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoletoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoletoCreateWithoutUserInput, BoletoUncheckedCreateWithoutUserInput> | BoletoCreateWithoutUserInput[] | BoletoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutUserInput | BoletoCreateOrConnectWithoutUserInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutUserInput | BoletoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoletoCreateManyUserInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutUserInput | BoletoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutUserInput | BoletoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBoletosInput = {
    create?: XOR<UserCreateWithoutBoletosInput, UserUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoletosInput
    connect?: UserWhereUniqueInput
  }

  export type SorteoCreateNestedOneWithoutBoletosInput = {
    create?: XOR<SorteoCreateWithoutBoletosInput, SorteoUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: SorteoCreateOrConnectWithoutBoletosInput
    connect?: SorteoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutBoletosNestedInput = {
    create?: XOR<UserCreateWithoutBoletosInput, UserUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoletosInput
    upsert?: UserUpsertWithoutBoletosInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBoletosInput, UserUpdateWithoutBoletosInput>, UserUncheckedUpdateWithoutBoletosInput>
  }

  export type SorteoUpdateOneWithoutBoletosNestedInput = {
    create?: XOR<SorteoCreateWithoutBoletosInput, SorteoUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: SorteoCreateOrConnectWithoutBoletosInput
    upsert?: SorteoUpsertWithoutBoletosInput
    disconnect?: SorteoWhereInput | boolean
    delete?: SorteoWhereInput | boolean
    connect?: SorteoWhereUniqueInput
    update?: XOR<XOR<SorteoUpdateToOneWithWhereWithoutBoletosInput, SorteoUpdateWithoutBoletosInput>, SorteoUncheckedUpdateWithoutBoletosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoletoCreateNestedManyWithoutSorteoInput = {
    create?: XOR<BoletoCreateWithoutSorteoInput, BoletoUncheckedCreateWithoutSorteoInput> | BoletoCreateWithoutSorteoInput[] | BoletoUncheckedCreateWithoutSorteoInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutSorteoInput | BoletoCreateOrConnectWithoutSorteoInput[]
    createMany?: BoletoCreateManySorteoInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type BoletoUncheckedCreateNestedManyWithoutSorteoInput = {
    create?: XOR<BoletoCreateWithoutSorteoInput, BoletoUncheckedCreateWithoutSorteoInput> | BoletoCreateWithoutSorteoInput[] | BoletoUncheckedCreateWithoutSorteoInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutSorteoInput | BoletoCreateOrConnectWithoutSorteoInput[]
    createMany?: BoletoCreateManySorteoInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type BoletoUpdateManyWithoutSorteoNestedInput = {
    create?: XOR<BoletoCreateWithoutSorteoInput, BoletoUncheckedCreateWithoutSorteoInput> | BoletoCreateWithoutSorteoInput[] | BoletoUncheckedCreateWithoutSorteoInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutSorteoInput | BoletoCreateOrConnectWithoutSorteoInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutSorteoInput | BoletoUpsertWithWhereUniqueWithoutSorteoInput[]
    createMany?: BoletoCreateManySorteoInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutSorteoInput | BoletoUpdateWithWhereUniqueWithoutSorteoInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutSorteoInput | BoletoUpdateManyWithWhereWithoutSorteoInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type BoletoUncheckedUpdateManyWithoutSorteoNestedInput = {
    create?: XOR<BoletoCreateWithoutSorteoInput, BoletoUncheckedCreateWithoutSorteoInput> | BoletoCreateWithoutSorteoInput[] | BoletoUncheckedCreateWithoutSorteoInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutSorteoInput | BoletoCreateOrConnectWithoutSorteoInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutSorteoInput | BoletoUpsertWithWhereUniqueWithoutSorteoInput[]
    createMany?: BoletoCreateManySorteoInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutSorteoInput | BoletoUpdateWithWhereUniqueWithoutSorteoInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutSorteoInput | BoletoUpdateManyWithWhereWithoutSorteoInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoletoCreateWithoutUserInput = {
    numero: number
    vendido?: boolean
    sorteo?: SorteoCreateNestedOneWithoutBoletosInput
  }

  export type BoletoUncheckedCreateWithoutUserInput = {
    id?: number
    numero: number
    vendido?: boolean
    sorteoId?: number | null
  }

  export type BoletoCreateOrConnectWithoutUserInput = {
    where: BoletoWhereUniqueInput
    create: XOR<BoletoCreateWithoutUserInput, BoletoUncheckedCreateWithoutUserInput>
  }

  export type BoletoCreateManyUserInputEnvelope = {
    data: BoletoCreateManyUserInput | BoletoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BoletoUpsertWithWhereUniqueWithoutUserInput = {
    where: BoletoWhereUniqueInput
    update: XOR<BoletoUpdateWithoutUserInput, BoletoUncheckedUpdateWithoutUserInput>
    create: XOR<BoletoCreateWithoutUserInput, BoletoUncheckedCreateWithoutUserInput>
  }

  export type BoletoUpdateWithWhereUniqueWithoutUserInput = {
    where: BoletoWhereUniqueInput
    data: XOR<BoletoUpdateWithoutUserInput, BoletoUncheckedUpdateWithoutUserInput>
  }

  export type BoletoUpdateManyWithWhereWithoutUserInput = {
    where: BoletoScalarWhereInput
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyWithoutUserInput>
  }

  export type BoletoScalarWhereInput = {
    AND?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
    OR?: BoletoScalarWhereInput[]
    NOT?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
    id?: IntFilter<"Boleto"> | number
    numero?: IntFilter<"Boleto"> | number
    vendido?: BoolFilter<"Boleto"> | boolean
    userId?: IntNullableFilter<"Boleto"> | number | null
    sorteoId?: IntNullableFilter<"Boleto"> | number | null
  }

  export type UserCreateWithoutBoletosInput = {
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBoletosInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBoletosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoletosInput, UserUncheckedCreateWithoutBoletosInput>
  }

  export type SorteoCreateWithoutBoletosInput = {
    nombre: string
    fecha: Date | string
  }

  export type SorteoUncheckedCreateWithoutBoletosInput = {
    id?: number
    nombre: string
    fecha: Date | string
  }

  export type SorteoCreateOrConnectWithoutBoletosInput = {
    where: SorteoWhereUniqueInput
    create: XOR<SorteoCreateWithoutBoletosInput, SorteoUncheckedCreateWithoutBoletosInput>
  }

  export type UserUpsertWithoutBoletosInput = {
    update: XOR<UserUpdateWithoutBoletosInput, UserUncheckedUpdateWithoutBoletosInput>
    create: XOR<UserCreateWithoutBoletosInput, UserUncheckedCreateWithoutBoletosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBoletosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBoletosInput, UserUncheckedUpdateWithoutBoletosInput>
  }

  export type UserUpdateWithoutBoletosInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBoletosInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteoUpsertWithoutBoletosInput = {
    update: XOR<SorteoUpdateWithoutBoletosInput, SorteoUncheckedUpdateWithoutBoletosInput>
    create: XOR<SorteoCreateWithoutBoletosInput, SorteoUncheckedCreateWithoutBoletosInput>
    where?: SorteoWhereInput
  }

  export type SorteoUpdateToOneWithWhereWithoutBoletosInput = {
    where?: SorteoWhereInput
    data: XOR<SorteoUpdateWithoutBoletosInput, SorteoUncheckedUpdateWithoutBoletosInput>
  }

  export type SorteoUpdateWithoutBoletosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteoUncheckedUpdateWithoutBoletosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoletoCreateWithoutSorteoInput = {
    numero: number
    vendido?: boolean
    user?: UserCreateNestedOneWithoutBoletosInput
  }

  export type BoletoUncheckedCreateWithoutSorteoInput = {
    id?: number
    numero: number
    vendido?: boolean
    userId?: number | null
  }

  export type BoletoCreateOrConnectWithoutSorteoInput = {
    where: BoletoWhereUniqueInput
    create: XOR<BoletoCreateWithoutSorteoInput, BoletoUncheckedCreateWithoutSorteoInput>
  }

  export type BoletoCreateManySorteoInputEnvelope = {
    data: BoletoCreateManySorteoInput | BoletoCreateManySorteoInput[]
    skipDuplicates?: boolean
  }

  export type BoletoUpsertWithWhereUniqueWithoutSorteoInput = {
    where: BoletoWhereUniqueInput
    update: XOR<BoletoUpdateWithoutSorteoInput, BoletoUncheckedUpdateWithoutSorteoInput>
    create: XOR<BoletoCreateWithoutSorteoInput, BoletoUncheckedCreateWithoutSorteoInput>
  }

  export type BoletoUpdateWithWhereUniqueWithoutSorteoInput = {
    where: BoletoWhereUniqueInput
    data: XOR<BoletoUpdateWithoutSorteoInput, BoletoUncheckedUpdateWithoutSorteoInput>
  }

  export type BoletoUpdateManyWithWhereWithoutSorteoInput = {
    where: BoletoScalarWhereInput
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyWithoutSorteoInput>
  }

  export type BoletoCreateManyUserInput = {
    id?: number
    numero: number
    vendido?: boolean
    sorteoId?: number | null
  }

  export type BoletoUpdateWithoutUserInput = {
    numero?: IntFieldUpdateOperationsInput | number
    vendido?: BoolFieldUpdateOperationsInput | boolean
    sorteo?: SorteoUpdateOneWithoutBoletosNestedInput
  }

  export type BoletoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    vendido?: BoolFieldUpdateOperationsInput | boolean
    sorteoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BoletoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    vendido?: BoolFieldUpdateOperationsInput | boolean
    sorteoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BoletoCreateManySorteoInput = {
    id?: number
    numero: number
    vendido?: boolean
    userId?: number | null
  }

  export type BoletoUpdateWithoutSorteoInput = {
    numero?: IntFieldUpdateOperationsInput | number
    vendido?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutBoletosNestedInput
  }

  export type BoletoUncheckedUpdateWithoutSorteoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    vendido?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BoletoUncheckedUpdateManyWithoutSorteoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    vendido?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}