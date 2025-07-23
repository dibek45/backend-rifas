
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
 * Model Comprador
 * 
 */
export type Comprador = $Result.DefaultSelection<Prisma.$CompradorPayload>
/**
 * Model Vendedor
 * 
 */
export type Vendedor = $Result.DefaultSelection<Prisma.$VendedorPayload>
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
 * // Fetch zero or more Compradors
 * const compradors = await prisma.comprador.findMany()
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
   * // Fetch zero or more Compradors
   * const compradors = await prisma.comprador.findMany()
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
   * `prisma.comprador`: Exposes CRUD operations for the **Comprador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compradors
    * const compradors = await prisma.comprador.findMany()
    * ```
    */
  get comprador(): Prisma.CompradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendedor`: Exposes CRUD operations for the **Vendedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendedors
    * const vendedors = await prisma.vendedor.findMany()
    * ```
    */
  get vendedor(): Prisma.VendedorDelegate<ExtArgs, ClientOptions>;

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
    Comprador: 'Comprador',
    Vendedor: 'Vendedor',
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
      modelProps: "comprador" | "vendedor" | "boleto" | "sorteo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Comprador: {
        payload: Prisma.$CompradorPayload<ExtArgs>
        fields: Prisma.CompradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          findFirst: {
            args: Prisma.CompradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          findMany: {
            args: Prisma.CompradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>[]
          }
          create: {
            args: Prisma.CompradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          createMany: {
            args: Prisma.CompradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>[]
          }
          delete: {
            args: Prisma.CompradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          update: {
            args: Prisma.CompradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          deleteMany: {
            args: Prisma.CompradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompradorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>[]
          }
          upsert: {
            args: Prisma.CompradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          aggregate: {
            args: Prisma.CompradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComprador>
          }
          groupBy: {
            args: Prisma.CompradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompradorCountArgs<ExtArgs>
            result: $Utils.Optional<CompradorCountAggregateOutputType> | number
          }
        }
      }
      Vendedor: {
        payload: Prisma.$VendedorPayload<ExtArgs>
        fields: Prisma.VendedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          findFirst: {
            args: Prisma.VendedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          findMany: {
            args: Prisma.VendedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>[]
          }
          create: {
            args: Prisma.VendedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          createMany: {
            args: Prisma.VendedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>[]
          }
          delete: {
            args: Prisma.VendedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          update: {
            args: Prisma.VendedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          deleteMany: {
            args: Prisma.VendedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>[]
          }
          upsert: {
            args: Prisma.VendedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          aggregate: {
            args: Prisma.VendedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendedor>
          }
          groupBy: {
            args: Prisma.VendedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendedorCountArgs<ExtArgs>
            result: $Utils.Optional<VendedorCountAggregateOutputType> | number
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
    comprador?: CompradorOmit
    vendedor?: VendedorOmit
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
   * Count Type CompradorCountOutputType
   */

  export type CompradorCountOutputType = {
    boletos: number
  }

  export type CompradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | CompradorCountOutputTypeCountBoletosArgs
  }

  // Custom InputTypes
  /**
   * CompradorCountOutputType without action
   */
  export type CompradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompradorCountOutputType
     */
    select?: CompradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompradorCountOutputType without action
   */
  export type CompradorCountOutputTypeCountBoletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoletoWhereInput
  }


  /**
   * Count Type VendedorCountOutputType
   */

  export type VendedorCountOutputType = {
    boletos: number
  }

  export type VendedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | VendedorCountOutputTypeCountBoletosArgs
  }

  // Custom InputTypes
  /**
   * VendedorCountOutputType without action
   */
  export type VendedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendedorCountOutputType
     */
    select?: VendedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendedorCountOutputType without action
   */
  export type VendedorCountOutputTypeCountBoletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Comprador
   */

  export type AggregateComprador = {
    _count: CompradorCountAggregateOutputType | null
    _avg: CompradorAvgAggregateOutputType | null
    _sum: CompradorSumAggregateOutputType | null
    _min: CompradorMinAggregateOutputType | null
    _max: CompradorMaxAggregateOutputType | null
  }

  export type CompradorAvgAggregateOutputType = {
    id: number | null
  }

  export type CompradorSumAggregateOutputType = {
    id: number | null
  }

  export type CompradorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    createdAt: Date | null
  }

  export type CompradorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    createdAt: Date | null
  }

  export type CompradorCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    createdAt: number
    _all: number
  }


  export type CompradorAvgAggregateInputType = {
    id?: true
  }

  export type CompradorSumAggregateInputType = {
    id?: true
  }

  export type CompradorMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    createdAt?: true
  }

  export type CompradorMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    createdAt?: true
  }

  export type CompradorCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type CompradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comprador to aggregate.
     */
    where?: CompradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compradors to fetch.
     */
    orderBy?: CompradorOrderByWithRelationInput | CompradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compradors
    **/
    _count?: true | CompradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompradorMaxAggregateInputType
  }

  export type GetCompradorAggregateType<T extends CompradorAggregateArgs> = {
        [P in keyof T & keyof AggregateComprador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComprador[P]>
      : GetScalarType<T[P], AggregateComprador[P]>
  }




  export type CompradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompradorWhereInput
    orderBy?: CompradorOrderByWithAggregationInput | CompradorOrderByWithAggregationInput[]
    by: CompradorScalarFieldEnum[] | CompradorScalarFieldEnum
    having?: CompradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompradorCountAggregateInputType | true
    _avg?: CompradorAvgAggregateInputType
    _sum?: CompradorSumAggregateInputType
    _min?: CompradorMinAggregateInputType
    _max?: CompradorMaxAggregateInputType
  }

  export type CompradorGroupByOutputType = {
    id: number
    nombre: string
    email: string
    createdAt: Date
    _count: CompradorCountAggregateOutputType | null
    _avg: CompradorAvgAggregateOutputType | null
    _sum: CompradorSumAggregateOutputType | null
    _min: CompradorMinAggregateOutputType | null
    _max: CompradorMaxAggregateOutputType | null
  }

  type GetCompradorGroupByPayload<T extends CompradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompradorGroupByOutputType[P]>
            : GetScalarType<T[P], CompradorGroupByOutputType[P]>
        }
      >
    >


  export type CompradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    createdAt?: boolean
    boletos?: boolean | Comprador$boletosArgs<ExtArgs>
    _count?: boolean | CompradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprador"]>

  export type CompradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comprador"]>

  export type CompradorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comprador"]>

  export type CompradorSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type CompradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "createdAt", ExtArgs["result"]["comprador"]>
  export type CompradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | Comprador$boletosArgs<ExtArgs>
    _count?: boolean | CompradorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompradorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompradorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comprador"
    objects: {
      boletos: Prisma.$BoletoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["comprador"]>
    composites: {}
  }

  type CompradorGetPayload<S extends boolean | null | undefined | CompradorDefaultArgs> = $Result.GetResult<Prisma.$CompradorPayload, S>

  type CompradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompradorCountAggregateInputType | true
    }

  export interface CompradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comprador'], meta: { name: 'Comprador' } }
    /**
     * Find zero or one Comprador that matches the filter.
     * @param {CompradorFindUniqueArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompradorFindUniqueArgs>(args: SelectSubset<T, CompradorFindUniqueArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comprador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompradorFindUniqueOrThrowArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompradorFindUniqueOrThrowArgs>(args: SelectSubset<T, CompradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorFindFirstArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompradorFindFirstArgs>(args?: SelectSubset<T, CompradorFindFirstArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorFindFirstOrThrowArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompradorFindFirstOrThrowArgs>(args?: SelectSubset<T, CompradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Compradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compradors
     * const compradors = await prisma.comprador.findMany()
     * 
     * // Get first 10 Compradors
     * const compradors = await prisma.comprador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compradorWithIdOnly = await prisma.comprador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompradorFindManyArgs>(args?: SelectSubset<T, CompradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comprador.
     * @param {CompradorCreateArgs} args - Arguments to create a Comprador.
     * @example
     * // Create one Comprador
     * const Comprador = await prisma.comprador.create({
     *   data: {
     *     // ... data to create a Comprador
     *   }
     * })
     * 
     */
    create<T extends CompradorCreateArgs>(args: SelectSubset<T, CompradorCreateArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Compradors.
     * @param {CompradorCreateManyArgs} args - Arguments to create many Compradors.
     * @example
     * // Create many Compradors
     * const comprador = await prisma.comprador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompradorCreateManyArgs>(args?: SelectSubset<T, CompradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Compradors and returns the data saved in the database.
     * @param {CompradorCreateManyAndReturnArgs} args - Arguments to create many Compradors.
     * @example
     * // Create many Compradors
     * const comprador = await prisma.comprador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Compradors and only return the `id`
     * const compradorWithIdOnly = await prisma.comprador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompradorCreateManyAndReturnArgs>(args?: SelectSubset<T, CompradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comprador.
     * @param {CompradorDeleteArgs} args - Arguments to delete one Comprador.
     * @example
     * // Delete one Comprador
     * const Comprador = await prisma.comprador.delete({
     *   where: {
     *     // ... filter to delete one Comprador
     *   }
     * })
     * 
     */
    delete<T extends CompradorDeleteArgs>(args: SelectSubset<T, CompradorDeleteArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comprador.
     * @param {CompradorUpdateArgs} args - Arguments to update one Comprador.
     * @example
     * // Update one Comprador
     * const comprador = await prisma.comprador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompradorUpdateArgs>(args: SelectSubset<T, CompradorUpdateArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Compradors.
     * @param {CompradorDeleteManyArgs} args - Arguments to filter Compradors to delete.
     * @example
     * // Delete a few Compradors
     * const { count } = await prisma.comprador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompradorDeleteManyArgs>(args?: SelectSubset<T, CompradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compradors
     * const comprador = await prisma.comprador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompradorUpdateManyArgs>(args: SelectSubset<T, CompradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compradors and returns the data updated in the database.
     * @param {CompradorUpdateManyAndReturnArgs} args - Arguments to update many Compradors.
     * @example
     * // Update many Compradors
     * const comprador = await prisma.comprador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Compradors and only return the `id`
     * const compradorWithIdOnly = await prisma.comprador.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompradorUpdateManyAndReturnArgs>(args: SelectSubset<T, CompradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comprador.
     * @param {CompradorUpsertArgs} args - Arguments to update or create a Comprador.
     * @example
     * // Update or create a Comprador
     * const comprador = await prisma.comprador.upsert({
     *   create: {
     *     // ... data to create a Comprador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comprador we want to update
     *   }
     * })
     */
    upsert<T extends CompradorUpsertArgs>(args: SelectSubset<T, CompradorUpsertArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Compradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorCountArgs} args - Arguments to filter Compradors to count.
     * @example
     * // Count the number of Compradors
     * const count = await prisma.comprador.count({
     *   where: {
     *     // ... the filter for the Compradors we want to count
     *   }
     * })
    **/
    count<T extends CompradorCountArgs>(
      args?: Subset<T, CompradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comprador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompradorAggregateArgs>(args: Subset<T, CompradorAggregateArgs>): Prisma.PrismaPromise<GetCompradorAggregateType<T>>

    /**
     * Group by Comprador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorGroupByArgs} args - Group by arguments.
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
      T extends CompradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompradorGroupByArgs['orderBy'] }
        : { orderBy?: CompradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comprador model
   */
  readonly fields: CompradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comprador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boletos<T extends Comprador$boletosArgs<ExtArgs> = {}>(args?: Subset<T, Comprador$boletosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comprador model
   */
  interface CompradorFieldRefs {
    readonly id: FieldRef<"Comprador", 'Int'>
    readonly nombre: FieldRef<"Comprador", 'String'>
    readonly email: FieldRef<"Comprador", 'String'>
    readonly createdAt: FieldRef<"Comprador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comprador findUnique
   */
  export type CompradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter, which Comprador to fetch.
     */
    where: CompradorWhereUniqueInput
  }

  /**
   * Comprador findUniqueOrThrow
   */
  export type CompradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter, which Comprador to fetch.
     */
    where: CompradorWhereUniqueInput
  }

  /**
   * Comprador findFirst
   */
  export type CompradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter, which Comprador to fetch.
     */
    where?: CompradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compradors to fetch.
     */
    orderBy?: CompradorOrderByWithRelationInput | CompradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compradors.
     */
    cursor?: CompradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compradors.
     */
    distinct?: CompradorScalarFieldEnum | CompradorScalarFieldEnum[]
  }

  /**
   * Comprador findFirstOrThrow
   */
  export type CompradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter, which Comprador to fetch.
     */
    where?: CompradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compradors to fetch.
     */
    orderBy?: CompradorOrderByWithRelationInput | CompradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compradors.
     */
    cursor?: CompradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compradors.
     */
    distinct?: CompradorScalarFieldEnum | CompradorScalarFieldEnum[]
  }

  /**
   * Comprador findMany
   */
  export type CompradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter, which Compradors to fetch.
     */
    where?: CompradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compradors to fetch.
     */
    orderBy?: CompradorOrderByWithRelationInput | CompradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compradors.
     */
    cursor?: CompradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compradors.
     */
    skip?: number
    distinct?: CompradorScalarFieldEnum | CompradorScalarFieldEnum[]
  }

  /**
   * Comprador create
   */
  export type CompradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Comprador.
     */
    data: XOR<CompradorCreateInput, CompradorUncheckedCreateInput>
  }

  /**
   * Comprador createMany
   */
  export type CompradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compradors.
     */
    data: CompradorCreateManyInput | CompradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comprador createManyAndReturn
   */
  export type CompradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * The data used to create many Compradors.
     */
    data: CompradorCreateManyInput | CompradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comprador update
   */
  export type CompradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Comprador.
     */
    data: XOR<CompradorUpdateInput, CompradorUncheckedUpdateInput>
    /**
     * Choose, which Comprador to update.
     */
    where: CompradorWhereUniqueInput
  }

  /**
   * Comprador updateMany
   */
  export type CompradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compradors.
     */
    data: XOR<CompradorUpdateManyMutationInput, CompradorUncheckedUpdateManyInput>
    /**
     * Filter which Compradors to update
     */
    where?: CompradorWhereInput
    /**
     * Limit how many Compradors to update.
     */
    limit?: number
  }

  /**
   * Comprador updateManyAndReturn
   */
  export type CompradorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * The data used to update Compradors.
     */
    data: XOR<CompradorUpdateManyMutationInput, CompradorUncheckedUpdateManyInput>
    /**
     * Filter which Compradors to update
     */
    where?: CompradorWhereInput
    /**
     * Limit how many Compradors to update.
     */
    limit?: number
  }

  /**
   * Comprador upsert
   */
  export type CompradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Comprador to update in case it exists.
     */
    where: CompradorWhereUniqueInput
    /**
     * In case the Comprador found by the `where` argument doesn't exist, create a new Comprador with this data.
     */
    create: XOR<CompradorCreateInput, CompradorUncheckedCreateInput>
    /**
     * In case the Comprador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompradorUpdateInput, CompradorUncheckedUpdateInput>
  }

  /**
   * Comprador delete
   */
  export type CompradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter which Comprador to delete.
     */
    where: CompradorWhereUniqueInput
  }

  /**
   * Comprador deleteMany
   */
  export type CompradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compradors to delete
     */
    where?: CompradorWhereInput
    /**
     * Limit how many Compradors to delete.
     */
    limit?: number
  }

  /**
   * Comprador.boletos
   */
  export type Comprador$boletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Comprador without action
   */
  export type CompradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
  }


  /**
   * Model Vendedor
   */

  export type AggregateVendedor = {
    _count: VendedorCountAggregateOutputType | null
    _avg: VendedorAvgAggregateOutputType | null
    _sum: VendedorSumAggregateOutputType | null
    _min: VendedorMinAggregateOutputType | null
    _max: VendedorMaxAggregateOutputType | null
  }

  export type VendedorAvgAggregateOutputType = {
    id: number | null
  }

  export type VendedorSumAggregateOutputType = {
    id: number | null
  }

  export type VendedorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    rol: string | null
    createdAt: Date | null
  }

  export type VendedorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    rol: string | null
    createdAt: Date | null
  }

  export type VendedorCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    rol: number
    createdAt: number
    _all: number
  }


  export type VendedorAvgAggregateInputType = {
    id?: true
  }

  export type VendedorSumAggregateInputType = {
    id?: true
  }

  export type VendedorMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    rol?: true
    createdAt?: true
  }

  export type VendedorMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    rol?: true
    createdAt?: true
  }

  export type VendedorCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    rol?: true
    createdAt?: true
    _all?: true
  }

  export type VendedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendedor to aggregate.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendedors
    **/
    _count?: true | VendedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendedorMaxAggregateInputType
  }

  export type GetVendedorAggregateType<T extends VendedorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendedor[P]>
      : GetScalarType<T[P], AggregateVendedor[P]>
  }




  export type VendedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendedorWhereInput
    orderBy?: VendedorOrderByWithAggregationInput | VendedorOrderByWithAggregationInput[]
    by: VendedorScalarFieldEnum[] | VendedorScalarFieldEnum
    having?: VendedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendedorCountAggregateInputType | true
    _avg?: VendedorAvgAggregateInputType
    _sum?: VendedorSumAggregateInputType
    _min?: VendedorMinAggregateInputType
    _max?: VendedorMaxAggregateInputType
  }

  export type VendedorGroupByOutputType = {
    id: number
    nombre: string
    email: string
    rol: string
    createdAt: Date
    _count: VendedorCountAggregateOutputType | null
    _avg: VendedorAvgAggregateOutputType | null
    _sum: VendedorSumAggregateOutputType | null
    _min: VendedorMinAggregateOutputType | null
    _max: VendedorMaxAggregateOutputType | null
  }

  type GetVendedorGroupByPayload<T extends VendedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendedorGroupByOutputType[P]>
            : GetScalarType<T[P], VendedorGroupByOutputType[P]>
        }
      >
    >


  export type VendedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    rol?: boolean
    createdAt?: boolean
    boletos?: boolean | Vendedor$boletosArgs<ExtArgs>
    _count?: boolean | VendedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendedor"]>

  export type VendedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    rol?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vendedor"]>

  export type VendedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    rol?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vendedor"]>

  export type VendedorSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    rol?: boolean
    createdAt?: boolean
  }

  export type VendedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "rol" | "createdAt", ExtArgs["result"]["vendedor"]>
  export type VendedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boletos?: boolean | Vendedor$boletosArgs<ExtArgs>
    _count?: boolean | VendedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VendedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VendedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendedor"
    objects: {
      boletos: Prisma.$BoletoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      rol: string
      createdAt: Date
    }, ExtArgs["result"]["vendedor"]>
    composites: {}
  }

  type VendedorGetPayload<S extends boolean | null | undefined | VendedorDefaultArgs> = $Result.GetResult<Prisma.$VendedorPayload, S>

  type VendedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendedorCountAggregateInputType | true
    }

  export interface VendedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendedor'], meta: { name: 'Vendedor' } }
    /**
     * Find zero or one Vendedor that matches the filter.
     * @param {VendedorFindUniqueArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendedorFindUniqueArgs>(args: SelectSubset<T, VendedorFindUniqueArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendedorFindUniqueOrThrowArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendedorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorFindFirstArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendedorFindFirstArgs>(args?: SelectSubset<T, VendedorFindFirstArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorFindFirstOrThrowArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendedorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendedors
     * const vendedors = await prisma.vendedor.findMany()
     * 
     * // Get first 10 Vendedors
     * const vendedors = await prisma.vendedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendedorWithIdOnly = await prisma.vendedor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendedorFindManyArgs>(args?: SelectSubset<T, VendedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendedor.
     * @param {VendedorCreateArgs} args - Arguments to create a Vendedor.
     * @example
     * // Create one Vendedor
     * const Vendedor = await prisma.vendedor.create({
     *   data: {
     *     // ... data to create a Vendedor
     *   }
     * })
     * 
     */
    create<T extends VendedorCreateArgs>(args: SelectSubset<T, VendedorCreateArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendedors.
     * @param {VendedorCreateManyArgs} args - Arguments to create many Vendedors.
     * @example
     * // Create many Vendedors
     * const vendedor = await prisma.vendedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendedorCreateManyArgs>(args?: SelectSubset<T, VendedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendedors and returns the data saved in the database.
     * @param {VendedorCreateManyAndReturnArgs} args - Arguments to create many Vendedors.
     * @example
     * // Create many Vendedors
     * const vendedor = await prisma.vendedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendedors and only return the `id`
     * const vendedorWithIdOnly = await prisma.vendedor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendedorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendedor.
     * @param {VendedorDeleteArgs} args - Arguments to delete one Vendedor.
     * @example
     * // Delete one Vendedor
     * const Vendedor = await prisma.vendedor.delete({
     *   where: {
     *     // ... filter to delete one Vendedor
     *   }
     * })
     * 
     */
    delete<T extends VendedorDeleteArgs>(args: SelectSubset<T, VendedorDeleteArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendedor.
     * @param {VendedorUpdateArgs} args - Arguments to update one Vendedor.
     * @example
     * // Update one Vendedor
     * const vendedor = await prisma.vendedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendedorUpdateArgs>(args: SelectSubset<T, VendedorUpdateArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendedors.
     * @param {VendedorDeleteManyArgs} args - Arguments to filter Vendedors to delete.
     * @example
     * // Delete a few Vendedors
     * const { count } = await prisma.vendedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendedorDeleteManyArgs>(args?: SelectSubset<T, VendedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendedors
     * const vendedor = await prisma.vendedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendedorUpdateManyArgs>(args: SelectSubset<T, VendedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedors and returns the data updated in the database.
     * @param {VendedorUpdateManyAndReturnArgs} args - Arguments to update many Vendedors.
     * @example
     * // Update many Vendedors
     * const vendedor = await prisma.vendedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendedors and only return the `id`
     * const vendedorWithIdOnly = await prisma.vendedor.updateManyAndReturn({
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
    updateManyAndReturn<T extends VendedorUpdateManyAndReturnArgs>(args: SelectSubset<T, VendedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendedor.
     * @param {VendedorUpsertArgs} args - Arguments to update or create a Vendedor.
     * @example
     * // Update or create a Vendedor
     * const vendedor = await prisma.vendedor.upsert({
     *   create: {
     *     // ... data to create a Vendedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendedor we want to update
     *   }
     * })
     */
    upsert<T extends VendedorUpsertArgs>(args: SelectSubset<T, VendedorUpsertArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorCountArgs} args - Arguments to filter Vendedors to count.
     * @example
     * // Count the number of Vendedors
     * const count = await prisma.vendedor.count({
     *   where: {
     *     // ... the filter for the Vendedors we want to count
     *   }
     * })
    **/
    count<T extends VendedorCountArgs>(
      args?: Subset<T, VendedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendedorAggregateArgs>(args: Subset<T, VendedorAggregateArgs>): Prisma.PrismaPromise<GetVendedorAggregateType<T>>

    /**
     * Group by Vendedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorGroupByArgs} args - Group by arguments.
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
      T extends VendedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendedorGroupByArgs['orderBy'] }
        : { orderBy?: VendedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendedor model
   */
  readonly fields: VendedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boletos<T extends Vendedor$boletosArgs<ExtArgs> = {}>(args?: Subset<T, Vendedor$boletosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoletoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vendedor model
   */
  interface VendedorFieldRefs {
    readonly id: FieldRef<"Vendedor", 'Int'>
    readonly nombre: FieldRef<"Vendedor", 'String'>
    readonly email: FieldRef<"Vendedor", 'String'>
    readonly rol: FieldRef<"Vendedor", 'String'>
    readonly createdAt: FieldRef<"Vendedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendedor findUnique
   */
  export type VendedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor findUniqueOrThrow
   */
  export type VendedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor findFirst
   */
  export type VendedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendedors.
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendedors.
     */
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * Vendedor findFirstOrThrow
   */
  export type VendedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendedors.
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendedors.
     */
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * Vendedor findMany
   */
  export type VendedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedors to fetch.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendedors.
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * Vendedor create
   */
  export type VendedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendedor.
     */
    data: XOR<VendedorCreateInput, VendedorUncheckedCreateInput>
  }

  /**
   * Vendedor createMany
   */
  export type VendedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendedors.
     */
    data: VendedorCreateManyInput | VendedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendedor createManyAndReturn
   */
  export type VendedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * The data used to create many Vendedors.
     */
    data: VendedorCreateManyInput | VendedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendedor update
   */
  export type VendedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendedor.
     */
    data: XOR<VendedorUpdateInput, VendedorUncheckedUpdateInput>
    /**
     * Choose, which Vendedor to update.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor updateMany
   */
  export type VendedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendedors.
     */
    data: XOR<VendedorUpdateManyMutationInput, VendedorUncheckedUpdateManyInput>
    /**
     * Filter which Vendedors to update
     */
    where?: VendedorWhereInput
    /**
     * Limit how many Vendedors to update.
     */
    limit?: number
  }

  /**
   * Vendedor updateManyAndReturn
   */
  export type VendedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * The data used to update Vendedors.
     */
    data: XOR<VendedorUpdateManyMutationInput, VendedorUncheckedUpdateManyInput>
    /**
     * Filter which Vendedors to update
     */
    where?: VendedorWhereInput
    /**
     * Limit how many Vendedors to update.
     */
    limit?: number
  }

  /**
   * Vendedor upsert
   */
  export type VendedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendedor to update in case it exists.
     */
    where: VendedorWhereUniqueInput
    /**
     * In case the Vendedor found by the `where` argument doesn't exist, create a new Vendedor with this data.
     */
    create: XOR<VendedorCreateInput, VendedorUncheckedCreateInput>
    /**
     * In case the Vendedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendedorUpdateInput, VendedorUncheckedUpdateInput>
  }

  /**
   * Vendedor delete
   */
  export type VendedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter which Vendedor to delete.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor deleteMany
   */
  export type VendedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendedors to delete
     */
    where?: VendedorWhereInput
    /**
     * Limit how many Vendedors to delete.
     */
    limit?: number
  }

  /**
   * Vendedor.boletos
   */
  export type Vendedor$boletosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Vendedor without action
   */
  export type VendedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
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
    precio: number | null
    compradorId: number | null
    vendedorId: number | null
    sorteoId: number | null
  }

  export type BoletoSumAggregateOutputType = {
    id: number | null
    numero: number | null
    precio: number | null
    compradorId: number | null
    vendedorId: number | null
    sorteoId: number | null
  }

  export type BoletoMinAggregateOutputType = {
    id: number | null
    numero: number | null
    precio: number | null
    estado: string | null
    metodoPago: string | null
    fechaCompra: Date | null
    compradorId: number | null
    vendedorId: number | null
    sorteoId: number | null
  }

  export type BoletoMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    precio: number | null
    estado: string | null
    metodoPago: string | null
    fechaCompra: Date | null
    compradorId: number | null
    vendedorId: number | null
    sorteoId: number | null
  }

  export type BoletoCountAggregateOutputType = {
    id: number
    numero: number
    precio: number
    estado: number
    metodoPago: number
    fechaCompra: number
    compradorId: number
    vendedorId: number
    sorteoId: number
    _all: number
  }


  export type BoletoAvgAggregateInputType = {
    id?: true
    numero?: true
    precio?: true
    compradorId?: true
    vendedorId?: true
    sorteoId?: true
  }

  export type BoletoSumAggregateInputType = {
    id?: true
    numero?: true
    precio?: true
    compradorId?: true
    vendedorId?: true
    sorteoId?: true
  }

  export type BoletoMinAggregateInputType = {
    id?: true
    numero?: true
    precio?: true
    estado?: true
    metodoPago?: true
    fechaCompra?: true
    compradorId?: true
    vendedorId?: true
    sorteoId?: true
  }

  export type BoletoMaxAggregateInputType = {
    id?: true
    numero?: true
    precio?: true
    estado?: true
    metodoPago?: true
    fechaCompra?: true
    compradorId?: true
    vendedorId?: true
    sorteoId?: true
  }

  export type BoletoCountAggregateInputType = {
    id?: true
    numero?: true
    precio?: true
    estado?: true
    metodoPago?: true
    fechaCompra?: true
    compradorId?: true
    vendedorId?: true
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
    precio: number
    estado: string
    metodoPago: string | null
    fechaCompra: Date | null
    compradorId: number | null
    vendedorId: number | null
    sorteoId: number
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
    precio?: boolean
    estado?: boolean
    metodoPago?: boolean
    fechaCompra?: boolean
    compradorId?: boolean
    vendedorId?: boolean
    sorteoId?: boolean
    comprador?: boolean | Boleto$compradorArgs<ExtArgs>
    vendedor?: boolean | Boleto$vendedorArgs<ExtArgs>
    sorteo?: boolean | SorteoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>

  export type BoletoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    precio?: boolean
    estado?: boolean
    metodoPago?: boolean
    fechaCompra?: boolean
    compradorId?: boolean
    vendedorId?: boolean
    sorteoId?: boolean
    comprador?: boolean | Boleto$compradorArgs<ExtArgs>
    vendedor?: boolean | Boleto$vendedorArgs<ExtArgs>
    sorteo?: boolean | SorteoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>

  export type BoletoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    precio?: boolean
    estado?: boolean
    metodoPago?: boolean
    fechaCompra?: boolean
    compradorId?: boolean
    vendedorId?: boolean
    sorteoId?: boolean
    comprador?: boolean | Boleto$compradorArgs<ExtArgs>
    vendedor?: boolean | Boleto$vendedorArgs<ExtArgs>
    sorteo?: boolean | SorteoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boleto"]>

  export type BoletoSelectScalar = {
    id?: boolean
    numero?: boolean
    precio?: boolean
    estado?: boolean
    metodoPago?: boolean
    fechaCompra?: boolean
    compradorId?: boolean
    vendedorId?: boolean
    sorteoId?: boolean
  }

  export type BoletoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "precio" | "estado" | "metodoPago" | "fechaCompra" | "compradorId" | "vendedorId" | "sorteoId", ExtArgs["result"]["boleto"]>
  export type BoletoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comprador?: boolean | Boleto$compradorArgs<ExtArgs>
    vendedor?: boolean | Boleto$vendedorArgs<ExtArgs>
    sorteo?: boolean | SorteoDefaultArgs<ExtArgs>
  }
  export type BoletoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comprador?: boolean | Boleto$compradorArgs<ExtArgs>
    vendedor?: boolean | Boleto$vendedorArgs<ExtArgs>
    sorteo?: boolean | SorteoDefaultArgs<ExtArgs>
  }
  export type BoletoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comprador?: boolean | Boleto$compradorArgs<ExtArgs>
    vendedor?: boolean | Boleto$vendedorArgs<ExtArgs>
    sorteo?: boolean | SorteoDefaultArgs<ExtArgs>
  }

  export type $BoletoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Boleto"
    objects: {
      comprador: Prisma.$CompradorPayload<ExtArgs> | null
      vendedor: Prisma.$VendedorPayload<ExtArgs> | null
      sorteo: Prisma.$SorteoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      precio: number
      estado: string
      metodoPago: string | null
      fechaCompra: Date | null
      compradorId: number | null
      vendedorId: number | null
      sorteoId: number
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
    comprador<T extends Boleto$compradorArgs<ExtArgs> = {}>(args?: Subset<T, Boleto$compradorArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vendedor<T extends Boleto$vendedorArgs<ExtArgs> = {}>(args?: Subset<T, Boleto$vendedorArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sorteo<T extends SorteoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SorteoDefaultArgs<ExtArgs>>): Prisma__SorteoClient<$Result.GetResult<Prisma.$SorteoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly precio: FieldRef<"Boleto", 'Float'>
    readonly estado: FieldRef<"Boleto", 'String'>
    readonly metodoPago: FieldRef<"Boleto", 'String'>
    readonly fechaCompra: FieldRef<"Boleto", 'DateTime'>
    readonly compradorId: FieldRef<"Boleto", 'Int'>
    readonly vendedorId: FieldRef<"Boleto", 'Int'>
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
   * Boleto.comprador
   */
  export type Boleto$compradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    where?: CompradorWhereInput
  }

  /**
   * Boleto.vendedor
   */
  export type Boleto$vendedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    where?: VendedorWhereInput
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
    descripcion: string | null
    imagen: string | null
    fecha: Date | null
    cierreVentas: Date | null
  }

  export type SorteoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    imagen: string | null
    fecha: Date | null
    cierreVentas: Date | null
  }

  export type SorteoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    imagen: number
    fecha: number
    cierreVentas: number
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
    descripcion?: true
    imagen?: true
    fecha?: true
    cierreVentas?: true
  }

  export type SorteoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    imagen?: true
    fecha?: true
    cierreVentas?: true
  }

  export type SorteoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    imagen?: true
    fecha?: true
    cierreVentas?: true
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
    descripcion: string | null
    imagen: string | null
    fecha: Date
    cierreVentas: Date | null
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
    descripcion?: boolean
    imagen?: boolean
    fecha?: boolean
    cierreVentas?: boolean
    boletos?: boolean | Sorteo$boletosArgs<ExtArgs>
    _count?: boolean | SorteoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sorteo"]>

  export type SorteoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagen?: boolean
    fecha?: boolean
    cierreVentas?: boolean
  }, ExtArgs["result"]["sorteo"]>

  export type SorteoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagen?: boolean
    fecha?: boolean
    cierreVentas?: boolean
  }, ExtArgs["result"]["sorteo"]>

  export type SorteoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagen?: boolean
    fecha?: boolean
    cierreVentas?: boolean
  }

  export type SorteoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "imagen" | "fecha" | "cierreVentas", ExtArgs["result"]["sorteo"]>
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
      descripcion: string | null
      imagen: string | null
      fecha: Date
      cierreVentas: Date | null
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
    readonly descripcion: FieldRef<"Sorteo", 'String'>
    readonly imagen: FieldRef<"Sorteo", 'String'>
    readonly fecha: FieldRef<"Sorteo", 'DateTime'>
    readonly cierreVentas: FieldRef<"Sorteo", 'DateTime'>
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


  export const CompradorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type CompradorScalarFieldEnum = (typeof CompradorScalarFieldEnum)[keyof typeof CompradorScalarFieldEnum]


  export const VendedorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    rol: 'rol',
    createdAt: 'createdAt'
  };

  export type VendedorScalarFieldEnum = (typeof VendedorScalarFieldEnum)[keyof typeof VendedorScalarFieldEnum]


  export const BoletoScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    precio: 'precio',
    estado: 'estado',
    metodoPago: 'metodoPago',
    fechaCompra: 'fechaCompra',
    compradorId: 'compradorId',
    vendedorId: 'vendedorId',
    sorteoId: 'sorteoId'
  };

  export type BoletoScalarFieldEnum = (typeof BoletoScalarFieldEnum)[keyof typeof BoletoScalarFieldEnum]


  export const SorteoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagen: 'imagen',
    fecha: 'fecha',
    cierreVentas: 'cierreVentas'
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


  export type CompradorWhereInput = {
    AND?: CompradorWhereInput | CompradorWhereInput[]
    OR?: CompradorWhereInput[]
    NOT?: CompradorWhereInput | CompradorWhereInput[]
    id?: IntFilter<"Comprador"> | number
    nombre?: StringFilter<"Comprador"> | string
    email?: StringFilter<"Comprador"> | string
    createdAt?: DateTimeFilter<"Comprador"> | Date | string
    boletos?: BoletoListRelationFilter
  }

  export type CompradorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    boletos?: BoletoOrderByRelationAggregateInput
  }

  export type CompradorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CompradorWhereInput | CompradorWhereInput[]
    OR?: CompradorWhereInput[]
    NOT?: CompradorWhereInput | CompradorWhereInput[]
    nombre?: StringFilter<"Comprador"> | string
    createdAt?: DateTimeFilter<"Comprador"> | Date | string
    boletos?: BoletoListRelationFilter
  }, "id" | "email">

  export type CompradorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: CompradorCountOrderByAggregateInput
    _avg?: CompradorAvgOrderByAggregateInput
    _max?: CompradorMaxOrderByAggregateInput
    _min?: CompradorMinOrderByAggregateInput
    _sum?: CompradorSumOrderByAggregateInput
  }

  export type CompradorScalarWhereWithAggregatesInput = {
    AND?: CompradorScalarWhereWithAggregatesInput | CompradorScalarWhereWithAggregatesInput[]
    OR?: CompradorScalarWhereWithAggregatesInput[]
    NOT?: CompradorScalarWhereWithAggregatesInput | CompradorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comprador"> | number
    nombre?: StringWithAggregatesFilter<"Comprador"> | string
    email?: StringWithAggregatesFilter<"Comprador"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comprador"> | Date | string
  }

  export type VendedorWhereInput = {
    AND?: VendedorWhereInput | VendedorWhereInput[]
    OR?: VendedorWhereInput[]
    NOT?: VendedorWhereInput | VendedorWhereInput[]
    id?: IntFilter<"Vendedor"> | number
    nombre?: StringFilter<"Vendedor"> | string
    email?: StringFilter<"Vendedor"> | string
    rol?: StringFilter<"Vendedor"> | string
    createdAt?: DateTimeFilter<"Vendedor"> | Date | string
    boletos?: BoletoListRelationFilter
  }

  export type VendedorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    boletos?: BoletoOrderByRelationAggregateInput
  }

  export type VendedorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: VendedorWhereInput | VendedorWhereInput[]
    OR?: VendedorWhereInput[]
    NOT?: VendedorWhereInput | VendedorWhereInput[]
    nombre?: StringFilter<"Vendedor"> | string
    rol?: StringFilter<"Vendedor"> | string
    createdAt?: DateTimeFilter<"Vendedor"> | Date | string
    boletos?: BoletoListRelationFilter
  }, "id" | "email">

  export type VendedorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    _count?: VendedorCountOrderByAggregateInput
    _avg?: VendedorAvgOrderByAggregateInput
    _max?: VendedorMaxOrderByAggregateInput
    _min?: VendedorMinOrderByAggregateInput
    _sum?: VendedorSumOrderByAggregateInput
  }

  export type VendedorScalarWhereWithAggregatesInput = {
    AND?: VendedorScalarWhereWithAggregatesInput | VendedorScalarWhereWithAggregatesInput[]
    OR?: VendedorScalarWhereWithAggregatesInput[]
    NOT?: VendedorScalarWhereWithAggregatesInput | VendedorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vendedor"> | number
    nombre?: StringWithAggregatesFilter<"Vendedor"> | string
    email?: StringWithAggregatesFilter<"Vendedor"> | string
    rol?: StringWithAggregatesFilter<"Vendedor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vendedor"> | Date | string
  }

  export type BoletoWhereInput = {
    AND?: BoletoWhereInput | BoletoWhereInput[]
    OR?: BoletoWhereInput[]
    NOT?: BoletoWhereInput | BoletoWhereInput[]
    id?: IntFilter<"Boleto"> | number
    numero?: IntFilter<"Boleto"> | number
    precio?: FloatFilter<"Boleto"> | number
    estado?: StringFilter<"Boleto"> | string
    metodoPago?: StringNullableFilter<"Boleto"> | string | null
    fechaCompra?: DateTimeNullableFilter<"Boleto"> | Date | string | null
    compradorId?: IntNullableFilter<"Boleto"> | number | null
    vendedorId?: IntNullableFilter<"Boleto"> | number | null
    sorteoId?: IntFilter<"Boleto"> | number
    comprador?: XOR<CompradorNullableScalarRelationFilter, CompradorWhereInput> | null
    vendedor?: XOR<VendedorNullableScalarRelationFilter, VendedorWhereInput> | null
    sorteo?: XOR<SorteoScalarRelationFilter, SorteoWhereInput>
  }

  export type BoletoOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    precio?: SortOrder
    estado?: SortOrder
    metodoPago?: SortOrderInput | SortOrder
    fechaCompra?: SortOrderInput | SortOrder
    compradorId?: SortOrderInput | SortOrder
    vendedorId?: SortOrderInput | SortOrder
    sorteoId?: SortOrder
    comprador?: CompradorOrderByWithRelationInput
    vendedor?: VendedorOrderByWithRelationInput
    sorteo?: SorteoOrderByWithRelationInput
  }

  export type BoletoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoletoWhereInput | BoletoWhereInput[]
    OR?: BoletoWhereInput[]
    NOT?: BoletoWhereInput | BoletoWhereInput[]
    numero?: IntFilter<"Boleto"> | number
    precio?: FloatFilter<"Boleto"> | number
    estado?: StringFilter<"Boleto"> | string
    metodoPago?: StringNullableFilter<"Boleto"> | string | null
    fechaCompra?: DateTimeNullableFilter<"Boleto"> | Date | string | null
    compradorId?: IntNullableFilter<"Boleto"> | number | null
    vendedorId?: IntNullableFilter<"Boleto"> | number | null
    sorteoId?: IntFilter<"Boleto"> | number
    comprador?: XOR<CompradorNullableScalarRelationFilter, CompradorWhereInput> | null
    vendedor?: XOR<VendedorNullableScalarRelationFilter, VendedorWhereInput> | null
    sorteo?: XOR<SorteoScalarRelationFilter, SorteoWhereInput>
  }, "id">

  export type BoletoOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    precio?: SortOrder
    estado?: SortOrder
    metodoPago?: SortOrderInput | SortOrder
    fechaCompra?: SortOrderInput | SortOrder
    compradorId?: SortOrderInput | SortOrder
    vendedorId?: SortOrderInput | SortOrder
    sorteoId?: SortOrder
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
    precio?: FloatWithAggregatesFilter<"Boleto"> | number
    estado?: StringWithAggregatesFilter<"Boleto"> | string
    metodoPago?: StringNullableWithAggregatesFilter<"Boleto"> | string | null
    fechaCompra?: DateTimeNullableWithAggregatesFilter<"Boleto"> | Date | string | null
    compradorId?: IntNullableWithAggregatesFilter<"Boleto"> | number | null
    vendedorId?: IntNullableWithAggregatesFilter<"Boleto"> | number | null
    sorteoId?: IntWithAggregatesFilter<"Boleto"> | number
  }

  export type SorteoWhereInput = {
    AND?: SorteoWhereInput | SorteoWhereInput[]
    OR?: SorteoWhereInput[]
    NOT?: SorteoWhereInput | SorteoWhereInput[]
    id?: IntFilter<"Sorteo"> | number
    nombre?: StringFilter<"Sorteo"> | string
    descripcion?: StringNullableFilter<"Sorteo"> | string | null
    imagen?: StringNullableFilter<"Sorteo"> | string | null
    fecha?: DateTimeFilter<"Sorteo"> | Date | string
    cierreVentas?: DateTimeNullableFilter<"Sorteo"> | Date | string | null
    boletos?: BoletoListRelationFilter
  }

  export type SorteoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    fecha?: SortOrder
    cierreVentas?: SortOrderInput | SortOrder
    boletos?: BoletoOrderByRelationAggregateInput
  }

  export type SorteoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SorteoWhereInput | SorteoWhereInput[]
    OR?: SorteoWhereInput[]
    NOT?: SorteoWhereInput | SorteoWhereInput[]
    nombre?: StringFilter<"Sorteo"> | string
    descripcion?: StringNullableFilter<"Sorteo"> | string | null
    imagen?: StringNullableFilter<"Sorteo"> | string | null
    fecha?: DateTimeFilter<"Sorteo"> | Date | string
    cierreVentas?: DateTimeNullableFilter<"Sorteo"> | Date | string | null
    boletos?: BoletoListRelationFilter
  }, "id">

  export type SorteoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    fecha?: SortOrder
    cierreVentas?: SortOrderInput | SortOrder
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
    descripcion?: StringNullableWithAggregatesFilter<"Sorteo"> | string | null
    imagen?: StringNullableWithAggregatesFilter<"Sorteo"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"Sorteo"> | Date | string
    cierreVentas?: DateTimeNullableWithAggregatesFilter<"Sorteo"> | Date | string | null
  }

  export type CompradorCreateInput = {
    nombre: string
    email: string
    createdAt?: Date | string
    boletos?: BoletoCreateNestedManyWithoutCompradorInput
  }

  export type CompradorUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    createdAt?: Date | string
    boletos?: BoletoUncheckedCreateNestedManyWithoutCompradorInput
  }

  export type CompradorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUpdateManyWithoutCompradorNestedInput
  }

  export type CompradorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUncheckedUpdateManyWithoutCompradorNestedInput
  }

  export type CompradorCreateManyInput = {
    id?: number
    nombre: string
    email: string
    createdAt?: Date | string
  }

  export type CompradorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompradorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendedorCreateInput = {
    nombre: string
    email: string
    rol?: string
    createdAt?: Date | string
    boletos?: BoletoCreateNestedManyWithoutVendedorInput
  }

  export type VendedorUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    rol?: string
    createdAt?: Date | string
    boletos?: BoletoUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type VendedorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUpdateManyWithoutVendedorNestedInput
  }

  export type VendedorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boletos?: BoletoUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type VendedorCreateManyInput = {
    id?: number
    nombre: string
    email: string
    rol?: string
    createdAt?: Date | string
  }

  export type VendedorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendedorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoletoCreateInput = {
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    comprador?: CompradorCreateNestedOneWithoutBoletosInput
    vendedor?: VendedorCreateNestedOneWithoutBoletosInput
    sorteo: SorteoCreateNestedOneWithoutBoletosInput
  }

  export type BoletoUncheckedCreateInput = {
    id?: number
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    compradorId?: number | null
    vendedorId?: number | null
    sorteoId: number
  }

  export type BoletoUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprador?: CompradorUpdateOneWithoutBoletosNestedInput
    vendedor?: VendedorUpdateOneWithoutBoletosNestedInput
    sorteo?: SorteoUpdateOneRequiredWithoutBoletosNestedInput
  }

  export type BoletoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compradorId?: NullableIntFieldUpdateOperationsInput | number | null
    vendedorId?: NullableIntFieldUpdateOperationsInput | number | null
    sorteoId?: IntFieldUpdateOperationsInput | number
  }

  export type BoletoCreateManyInput = {
    id?: number
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    compradorId?: number | null
    vendedorId?: number | null
    sorteoId: number
  }

  export type BoletoUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoletoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compradorId?: NullableIntFieldUpdateOperationsInput | number | null
    vendedorId?: NullableIntFieldUpdateOperationsInput | number | null
    sorteoId?: IntFieldUpdateOperationsInput | number
  }

  export type SorteoCreateInput = {
    nombre: string
    descripcion?: string | null
    imagen?: string | null
    fecha: Date | string
    cierreVentas?: Date | string | null
    boletos?: BoletoCreateNestedManyWithoutSorteoInput
  }

  export type SorteoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    imagen?: string | null
    fecha: Date | string
    cierreVentas?: Date | string | null
    boletos?: BoletoUncheckedCreateNestedManyWithoutSorteoInput
  }

  export type SorteoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cierreVentas?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boletos?: BoletoUpdateManyWithoutSorteoNestedInput
  }

  export type SorteoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cierreVentas?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boletos?: BoletoUncheckedUpdateManyWithoutSorteoNestedInput
  }

  export type SorteoCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    imagen?: string | null
    fecha: Date | string
    cierreVentas?: Date | string | null
  }

  export type SorteoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cierreVentas?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SorteoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cierreVentas?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type CompradorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type CompradorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompradorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type CompradorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type CompradorSumOrderByAggregateInput = {
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

  export type VendedorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
  }

  export type VendedorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VendedorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
  }

  export type VendedorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
  }

  export type VendedorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type CompradorNullableScalarRelationFilter = {
    is?: CompradorWhereInput | null
    isNot?: CompradorWhereInput | null
  }

  export type VendedorNullableScalarRelationFilter = {
    is?: VendedorWhereInput | null
    isNot?: VendedorWhereInput | null
  }

  export type SorteoScalarRelationFilter = {
    is?: SorteoWhereInput
    isNot?: SorteoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BoletoCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    precio?: SortOrder
    estado?: SortOrder
    metodoPago?: SortOrder
    fechaCompra?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
    sorteoId?: SortOrder
  }

  export type BoletoAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    precio?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
    sorteoId?: SortOrder
  }

  export type BoletoMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    precio?: SortOrder
    estado?: SortOrder
    metodoPago?: SortOrder
    fechaCompra?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
    sorteoId?: SortOrder
  }

  export type BoletoMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    precio?: SortOrder
    estado?: SortOrder
    metodoPago?: SortOrder
    fechaCompra?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
    sorteoId?: SortOrder
  }

  export type BoletoSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    precio?: SortOrder
    compradorId?: SortOrder
    vendedorId?: SortOrder
    sorteoId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
    descripcion?: SortOrder
    imagen?: SortOrder
    fecha?: SortOrder
    cierreVentas?: SortOrder
  }

  export type SorteoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SorteoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    fecha?: SortOrder
    cierreVentas?: SortOrder
  }

  export type SorteoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    fecha?: SortOrder
    cierreVentas?: SortOrder
  }

  export type SorteoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoletoCreateNestedManyWithoutCompradorInput = {
    create?: XOR<BoletoCreateWithoutCompradorInput, BoletoUncheckedCreateWithoutCompradorInput> | BoletoCreateWithoutCompradorInput[] | BoletoUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutCompradorInput | BoletoCreateOrConnectWithoutCompradorInput[]
    createMany?: BoletoCreateManyCompradorInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type BoletoUncheckedCreateNestedManyWithoutCompradorInput = {
    create?: XOR<BoletoCreateWithoutCompradorInput, BoletoUncheckedCreateWithoutCompradorInput> | BoletoCreateWithoutCompradorInput[] | BoletoUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutCompradorInput | BoletoCreateOrConnectWithoutCompradorInput[]
    createMany?: BoletoCreateManyCompradorInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoletoUpdateManyWithoutCompradorNestedInput = {
    create?: XOR<BoletoCreateWithoutCompradorInput, BoletoUncheckedCreateWithoutCompradorInput> | BoletoCreateWithoutCompradorInput[] | BoletoUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutCompradorInput | BoletoCreateOrConnectWithoutCompradorInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutCompradorInput | BoletoUpsertWithWhereUniqueWithoutCompradorInput[]
    createMany?: BoletoCreateManyCompradorInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutCompradorInput | BoletoUpdateWithWhereUniqueWithoutCompradorInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutCompradorInput | BoletoUpdateManyWithWhereWithoutCompradorInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoletoUncheckedUpdateManyWithoutCompradorNestedInput = {
    create?: XOR<BoletoCreateWithoutCompradorInput, BoletoUncheckedCreateWithoutCompradorInput> | BoletoCreateWithoutCompradorInput[] | BoletoUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutCompradorInput | BoletoCreateOrConnectWithoutCompradorInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutCompradorInput | BoletoUpsertWithWhereUniqueWithoutCompradorInput[]
    createMany?: BoletoCreateManyCompradorInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutCompradorInput | BoletoUpdateWithWhereUniqueWithoutCompradorInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutCompradorInput | BoletoUpdateManyWithWhereWithoutCompradorInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type BoletoCreateNestedManyWithoutVendedorInput = {
    create?: XOR<BoletoCreateWithoutVendedorInput, BoletoUncheckedCreateWithoutVendedorInput> | BoletoCreateWithoutVendedorInput[] | BoletoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutVendedorInput | BoletoCreateOrConnectWithoutVendedorInput[]
    createMany?: BoletoCreateManyVendedorInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type BoletoUncheckedCreateNestedManyWithoutVendedorInput = {
    create?: XOR<BoletoCreateWithoutVendedorInput, BoletoUncheckedCreateWithoutVendedorInput> | BoletoCreateWithoutVendedorInput[] | BoletoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutVendedorInput | BoletoCreateOrConnectWithoutVendedorInput[]
    createMany?: BoletoCreateManyVendedorInputEnvelope
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
  }

  export type BoletoUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<BoletoCreateWithoutVendedorInput, BoletoUncheckedCreateWithoutVendedorInput> | BoletoCreateWithoutVendedorInput[] | BoletoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutVendedorInput | BoletoCreateOrConnectWithoutVendedorInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutVendedorInput | BoletoUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: BoletoCreateManyVendedorInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutVendedorInput | BoletoUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutVendedorInput | BoletoUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type BoletoUncheckedUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<BoletoCreateWithoutVendedorInput, BoletoUncheckedCreateWithoutVendedorInput> | BoletoCreateWithoutVendedorInput[] | BoletoUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: BoletoCreateOrConnectWithoutVendedorInput | BoletoCreateOrConnectWithoutVendedorInput[]
    upsert?: BoletoUpsertWithWhereUniqueWithoutVendedorInput | BoletoUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: BoletoCreateManyVendedorInputEnvelope
    set?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    disconnect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    delete?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    connect?: BoletoWhereUniqueInput | BoletoWhereUniqueInput[]
    update?: BoletoUpdateWithWhereUniqueWithoutVendedorInput | BoletoUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: BoletoUpdateManyWithWhereWithoutVendedorInput | BoletoUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
  }

  export type CompradorCreateNestedOneWithoutBoletosInput = {
    create?: XOR<CompradorCreateWithoutBoletosInput, CompradorUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: CompradorCreateOrConnectWithoutBoletosInput
    connect?: CompradorWhereUniqueInput
  }

  export type VendedorCreateNestedOneWithoutBoletosInput = {
    create?: XOR<VendedorCreateWithoutBoletosInput, VendedorUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: VendedorCreateOrConnectWithoutBoletosInput
    connect?: VendedorWhereUniqueInput
  }

  export type SorteoCreateNestedOneWithoutBoletosInput = {
    create?: XOR<SorteoCreateWithoutBoletosInput, SorteoUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: SorteoCreateOrConnectWithoutBoletosInput
    connect?: SorteoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompradorUpdateOneWithoutBoletosNestedInput = {
    create?: XOR<CompradorCreateWithoutBoletosInput, CompradorUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: CompradorCreateOrConnectWithoutBoletosInput
    upsert?: CompradorUpsertWithoutBoletosInput
    disconnect?: CompradorWhereInput | boolean
    delete?: CompradorWhereInput | boolean
    connect?: CompradorWhereUniqueInput
    update?: XOR<XOR<CompradorUpdateToOneWithWhereWithoutBoletosInput, CompradorUpdateWithoutBoletosInput>, CompradorUncheckedUpdateWithoutBoletosInput>
  }

  export type VendedorUpdateOneWithoutBoletosNestedInput = {
    create?: XOR<VendedorCreateWithoutBoletosInput, VendedorUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: VendedorCreateOrConnectWithoutBoletosInput
    upsert?: VendedorUpsertWithoutBoletosInput
    disconnect?: VendedorWhereInput | boolean
    delete?: VendedorWhereInput | boolean
    connect?: VendedorWhereUniqueInput
    update?: XOR<XOR<VendedorUpdateToOneWithWhereWithoutBoletosInput, VendedorUpdateWithoutBoletosInput>, VendedorUncheckedUpdateWithoutBoletosInput>
  }

  export type SorteoUpdateOneRequiredWithoutBoletosNestedInput = {
    create?: XOR<SorteoCreateWithoutBoletosInput, SorteoUncheckedCreateWithoutBoletosInput>
    connectOrCreate?: SorteoCreateOrConnectWithoutBoletosInput
    upsert?: SorteoUpsertWithoutBoletosInput
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BoletoCreateWithoutCompradorInput = {
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    vendedor?: VendedorCreateNestedOneWithoutBoletosInput
    sorteo: SorteoCreateNestedOneWithoutBoletosInput
  }

  export type BoletoUncheckedCreateWithoutCompradorInput = {
    id?: number
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    vendedorId?: number | null
    sorteoId: number
  }

  export type BoletoCreateOrConnectWithoutCompradorInput = {
    where: BoletoWhereUniqueInput
    create: XOR<BoletoCreateWithoutCompradorInput, BoletoUncheckedCreateWithoutCompradorInput>
  }

  export type BoletoCreateManyCompradorInputEnvelope = {
    data: BoletoCreateManyCompradorInput | BoletoCreateManyCompradorInput[]
    skipDuplicates?: boolean
  }

  export type BoletoUpsertWithWhereUniqueWithoutCompradorInput = {
    where: BoletoWhereUniqueInput
    update: XOR<BoletoUpdateWithoutCompradorInput, BoletoUncheckedUpdateWithoutCompradorInput>
    create: XOR<BoletoCreateWithoutCompradorInput, BoletoUncheckedCreateWithoutCompradorInput>
  }

  export type BoletoUpdateWithWhereUniqueWithoutCompradorInput = {
    where: BoletoWhereUniqueInput
    data: XOR<BoletoUpdateWithoutCompradorInput, BoletoUncheckedUpdateWithoutCompradorInput>
  }

  export type BoletoUpdateManyWithWhereWithoutCompradorInput = {
    where: BoletoScalarWhereInput
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyWithoutCompradorInput>
  }

  export type BoletoScalarWhereInput = {
    AND?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
    OR?: BoletoScalarWhereInput[]
    NOT?: BoletoScalarWhereInput | BoletoScalarWhereInput[]
    id?: IntFilter<"Boleto"> | number
    numero?: IntFilter<"Boleto"> | number
    precio?: FloatFilter<"Boleto"> | number
    estado?: StringFilter<"Boleto"> | string
    metodoPago?: StringNullableFilter<"Boleto"> | string | null
    fechaCompra?: DateTimeNullableFilter<"Boleto"> | Date | string | null
    compradorId?: IntNullableFilter<"Boleto"> | number | null
    vendedorId?: IntNullableFilter<"Boleto"> | number | null
    sorteoId?: IntFilter<"Boleto"> | number
  }

  export type BoletoCreateWithoutVendedorInput = {
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    comprador?: CompradorCreateNestedOneWithoutBoletosInput
    sorteo: SorteoCreateNestedOneWithoutBoletosInput
  }

  export type BoletoUncheckedCreateWithoutVendedorInput = {
    id?: number
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    compradorId?: number | null
    sorteoId: number
  }

  export type BoletoCreateOrConnectWithoutVendedorInput = {
    where: BoletoWhereUniqueInput
    create: XOR<BoletoCreateWithoutVendedorInput, BoletoUncheckedCreateWithoutVendedorInput>
  }

  export type BoletoCreateManyVendedorInputEnvelope = {
    data: BoletoCreateManyVendedorInput | BoletoCreateManyVendedorInput[]
    skipDuplicates?: boolean
  }

  export type BoletoUpsertWithWhereUniqueWithoutVendedorInput = {
    where: BoletoWhereUniqueInput
    update: XOR<BoletoUpdateWithoutVendedorInput, BoletoUncheckedUpdateWithoutVendedorInput>
    create: XOR<BoletoCreateWithoutVendedorInput, BoletoUncheckedCreateWithoutVendedorInput>
  }

  export type BoletoUpdateWithWhereUniqueWithoutVendedorInput = {
    where: BoletoWhereUniqueInput
    data: XOR<BoletoUpdateWithoutVendedorInput, BoletoUncheckedUpdateWithoutVendedorInput>
  }

  export type BoletoUpdateManyWithWhereWithoutVendedorInput = {
    where: BoletoScalarWhereInput
    data: XOR<BoletoUpdateManyMutationInput, BoletoUncheckedUpdateManyWithoutVendedorInput>
  }

  export type CompradorCreateWithoutBoletosInput = {
    nombre: string
    email: string
    createdAt?: Date | string
  }

  export type CompradorUncheckedCreateWithoutBoletosInput = {
    id?: number
    nombre: string
    email: string
    createdAt?: Date | string
  }

  export type CompradorCreateOrConnectWithoutBoletosInput = {
    where: CompradorWhereUniqueInput
    create: XOR<CompradorCreateWithoutBoletosInput, CompradorUncheckedCreateWithoutBoletosInput>
  }

  export type VendedorCreateWithoutBoletosInput = {
    nombre: string
    email: string
    rol?: string
    createdAt?: Date | string
  }

  export type VendedorUncheckedCreateWithoutBoletosInput = {
    id?: number
    nombre: string
    email: string
    rol?: string
    createdAt?: Date | string
  }

  export type VendedorCreateOrConnectWithoutBoletosInput = {
    where: VendedorWhereUniqueInput
    create: XOR<VendedorCreateWithoutBoletosInput, VendedorUncheckedCreateWithoutBoletosInput>
  }

  export type SorteoCreateWithoutBoletosInput = {
    nombre: string
    descripcion?: string | null
    imagen?: string | null
    fecha: Date | string
    cierreVentas?: Date | string | null
  }

  export type SorteoUncheckedCreateWithoutBoletosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    imagen?: string | null
    fecha: Date | string
    cierreVentas?: Date | string | null
  }

  export type SorteoCreateOrConnectWithoutBoletosInput = {
    where: SorteoWhereUniqueInput
    create: XOR<SorteoCreateWithoutBoletosInput, SorteoUncheckedCreateWithoutBoletosInput>
  }

  export type CompradorUpsertWithoutBoletosInput = {
    update: XOR<CompradorUpdateWithoutBoletosInput, CompradorUncheckedUpdateWithoutBoletosInput>
    create: XOR<CompradorCreateWithoutBoletosInput, CompradorUncheckedCreateWithoutBoletosInput>
    where?: CompradorWhereInput
  }

  export type CompradorUpdateToOneWithWhereWithoutBoletosInput = {
    where?: CompradorWhereInput
    data: XOR<CompradorUpdateWithoutBoletosInput, CompradorUncheckedUpdateWithoutBoletosInput>
  }

  export type CompradorUpdateWithoutBoletosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompradorUncheckedUpdateWithoutBoletosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendedorUpsertWithoutBoletosInput = {
    update: XOR<VendedorUpdateWithoutBoletosInput, VendedorUncheckedUpdateWithoutBoletosInput>
    create: XOR<VendedorCreateWithoutBoletosInput, VendedorUncheckedCreateWithoutBoletosInput>
    where?: VendedorWhereInput
  }

  export type VendedorUpdateToOneWithWhereWithoutBoletosInput = {
    where?: VendedorWhereInput
    data: XOR<VendedorUpdateWithoutBoletosInput, VendedorUncheckedUpdateWithoutBoletosInput>
  }

  export type VendedorUpdateWithoutBoletosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendedorUncheckedUpdateWithoutBoletosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
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
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cierreVentas?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SorteoUncheckedUpdateWithoutBoletosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cierreVentas?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoletoCreateWithoutSorteoInput = {
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    comprador?: CompradorCreateNestedOneWithoutBoletosInput
    vendedor?: VendedorCreateNestedOneWithoutBoletosInput
  }

  export type BoletoUncheckedCreateWithoutSorteoInput = {
    id?: number
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    compradorId?: number | null
    vendedorId?: number | null
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

  export type BoletoCreateManyCompradorInput = {
    id?: number
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    vendedorId?: number | null
    sorteoId: number
  }

  export type BoletoUpdateWithoutCompradorInput = {
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendedor?: VendedorUpdateOneWithoutBoletosNestedInput
    sorteo?: SorteoUpdateOneRequiredWithoutBoletosNestedInput
  }

  export type BoletoUncheckedUpdateWithoutCompradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendedorId?: NullableIntFieldUpdateOperationsInput | number | null
    sorteoId?: IntFieldUpdateOperationsInput | number
  }

  export type BoletoUncheckedUpdateManyWithoutCompradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendedorId?: NullableIntFieldUpdateOperationsInput | number | null
    sorteoId?: IntFieldUpdateOperationsInput | number
  }

  export type BoletoCreateManyVendedorInput = {
    id?: number
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    compradorId?: number | null
    sorteoId: number
  }

  export type BoletoUpdateWithoutVendedorInput = {
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprador?: CompradorUpdateOneWithoutBoletosNestedInput
    sorteo?: SorteoUpdateOneRequiredWithoutBoletosNestedInput
  }

  export type BoletoUncheckedUpdateWithoutVendedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compradorId?: NullableIntFieldUpdateOperationsInput | number | null
    sorteoId?: IntFieldUpdateOperationsInput | number
  }

  export type BoletoUncheckedUpdateManyWithoutVendedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compradorId?: NullableIntFieldUpdateOperationsInput | number | null
    sorteoId?: IntFieldUpdateOperationsInput | number
  }

  export type BoletoCreateManySorteoInput = {
    id?: number
    numero: number
    precio: number
    estado?: string
    metodoPago?: string | null
    fechaCompra?: Date | string | null
    compradorId?: number | null
    vendedorId?: number | null
  }

  export type BoletoUpdateWithoutSorteoInput = {
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprador?: CompradorUpdateOneWithoutBoletosNestedInput
    vendedor?: VendedorUpdateOneWithoutBoletosNestedInput
  }

  export type BoletoUncheckedUpdateWithoutSorteoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compradorId?: NullableIntFieldUpdateOperationsInput | number | null
    vendedorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BoletoUncheckedUpdateManyWithoutSorteoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    metodoPago?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compradorId?: NullableIntFieldUpdateOperationsInput | number | null
    vendedorId?: NullableIntFieldUpdateOperationsInput | number | null
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