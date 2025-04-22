
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
 * Model EventoEvent
 * 
 */
export type EventoEvent = $Result.DefaultSelection<Prisma.$EventoEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EventoEvents
 * const eventoEvents = await prisma.eventoEvent.findMany()
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
   * // Fetch zero or more EventoEvents
   * const eventoEvents = await prisma.eventoEvent.findMany()
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
   * `prisma.eventoEvent`: Exposes CRUD operations for the **EventoEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventoEvents
    * const eventoEvents = await prisma.eventoEvent.findMany()
    * ```
    */
  get eventoEvent(): Prisma.EventoEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    EventoEvent: 'EventoEvent'
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
      modelProps: "eventoEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      EventoEvent: {
        payload: Prisma.$EventoEventPayload<ExtArgs>
        fields: Prisma.EventoEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoEventPayload>
          }
          findFirst: {
            args: Prisma.EventoEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoEventPayload>
          }
          findMany: {
            args: Prisma.EventoEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoEventPayload>[]
          }
          create: {
            args: Prisma.EventoEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoEventPayload>
          }
          createMany: {
            args: Prisma.EventoEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoEventPayload>[]
          }
          delete: {
            args: Prisma.EventoEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoEventPayload>
          }
          update: {
            args: Prisma.EventoEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoEventPayload>
          }
          deleteMany: {
            args: Prisma.EventoEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoEventPayload>[]
          }
          upsert: {
            args: Prisma.EventoEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoEventPayload>
          }
          aggregate: {
            args: Prisma.EventoEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventoEvent>
          }
          groupBy: {
            args: Prisma.EventoEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoEventCountArgs<ExtArgs>
            result: $Utils.Optional<EventoEventCountAggregateOutputType> | number
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
    eventoEvent?: EventoEventOmit
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
   * Models
   */

  /**
   * Model EventoEvent
   */

  export type AggregateEventoEvent = {
    _count: EventoEventCountAggregateOutputType | null
    _avg: EventoEventAvgAggregateOutputType | null
    _sum: EventoEventSumAggregateOutputType | null
    _min: EventoEventMinAggregateOutputType | null
    _max: EventoEventMaxAggregateOutputType | null
  }

  export type EventoEventAvgAggregateOutputType = {
    id: number | null
  }

  export type EventoEventSumAggregateOutputType = {
    id: number | null
  }

  export type EventoEventMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    city: string | null
    location: string | null
    date: Date | null
    organizerName: string | null
    imageUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventoEventMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    city: string | null
    location: string | null
    date: Date | null
    organizerName: string | null
    imageUrl: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventoEventCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    city: number
    location: number
    date: number
    organizerName: number
    imageUrl: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventoEventAvgAggregateInputType = {
    id?: true
  }

  export type EventoEventSumAggregateInputType = {
    id?: true
  }

  export type EventoEventMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    city?: true
    location?: true
    date?: true
    organizerName?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventoEventMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    city?: true
    location?: true
    date?: true
    organizerName?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventoEventCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    city?: true
    location?: true
    date?: true
    organizerName?: true
    imageUrl?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventoEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventoEvent to aggregate.
     */
    where?: EventoEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoEvents to fetch.
     */
    orderBy?: EventoEventOrderByWithRelationInput | EventoEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventoEvents
    **/
    _count?: true | EventoEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoEventMaxAggregateInputType
  }

  export type GetEventoEventAggregateType<T extends EventoEventAggregateArgs> = {
        [P in keyof T & keyof AggregateEventoEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventoEvent[P]>
      : GetScalarType<T[P], AggregateEventoEvent[P]>
  }




  export type EventoEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoEventWhereInput
    orderBy?: EventoEventOrderByWithAggregationInput | EventoEventOrderByWithAggregationInput[]
    by: EventoEventScalarFieldEnum[] | EventoEventScalarFieldEnum
    having?: EventoEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoEventCountAggregateInputType | true
    _avg?: EventoEventAvgAggregateInputType
    _sum?: EventoEventSumAggregateInputType
    _min?: EventoEventMinAggregateInputType
    _max?: EventoEventMaxAggregateInputType
  }

  export type EventoEventGroupByOutputType = {
    id: number
    name: string
    slug: string
    city: string
    location: string
    date: Date
    organizerName: string
    imageUrl: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: EventoEventCountAggregateOutputType | null
    _avg: EventoEventAvgAggregateOutputType | null
    _sum: EventoEventSumAggregateOutputType | null
    _min: EventoEventMinAggregateOutputType | null
    _max: EventoEventMaxAggregateOutputType | null
  }

  type GetEventoEventGroupByPayload<T extends EventoEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoEventGroupByOutputType[P]>
            : GetScalarType<T[P], EventoEventGroupByOutputType[P]>
        }
      >
    >


  export type EventoEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    city?: boolean
    location?: boolean
    date?: boolean
    organizerName?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["eventoEvent"]>

  export type EventoEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    city?: boolean
    location?: boolean
    date?: boolean
    organizerName?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["eventoEvent"]>

  export type EventoEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    city?: boolean
    location?: boolean
    date?: boolean
    organizerName?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["eventoEvent"]>

  export type EventoEventSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    city?: boolean
    location?: boolean
    date?: boolean
    organizerName?: boolean
    imageUrl?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventoEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "city" | "location" | "date" | "organizerName" | "imageUrl" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["eventoEvent"]>

  export type $EventoEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventoEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      city: string
      location: string
      date: Date
      organizerName: string
      imageUrl: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventoEvent"]>
    composites: {}
  }

  type EventoEventGetPayload<S extends boolean | null | undefined | EventoEventDefaultArgs> = $Result.GetResult<Prisma.$EventoEventPayload, S>

  type EventoEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoEventCountAggregateInputType | true
    }

  export interface EventoEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventoEvent'], meta: { name: 'EventoEvent' } }
    /**
     * Find zero or one EventoEvent that matches the filter.
     * @param {EventoEventFindUniqueArgs} args - Arguments to find a EventoEvent
     * @example
     * // Get one EventoEvent
     * const eventoEvent = await prisma.eventoEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoEventFindUniqueArgs>(args: SelectSubset<T, EventoEventFindUniqueArgs<ExtArgs>>): Prisma__EventoEventClient<$Result.GetResult<Prisma.$EventoEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventoEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoEventFindUniqueOrThrowArgs} args - Arguments to find a EventoEvent
     * @example
     * // Get one EventoEvent
     * const eventoEvent = await prisma.eventoEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoEventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoEventClient<$Result.GetResult<Prisma.$EventoEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoEventFindFirstArgs} args - Arguments to find a EventoEvent
     * @example
     * // Get one EventoEvent
     * const eventoEvent = await prisma.eventoEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoEventFindFirstArgs>(args?: SelectSubset<T, EventoEventFindFirstArgs<ExtArgs>>): Prisma__EventoEventClient<$Result.GetResult<Prisma.$EventoEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventoEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoEventFindFirstOrThrowArgs} args - Arguments to find a EventoEvent
     * @example
     * // Get one EventoEvent
     * const eventoEvent = await prisma.eventoEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoEventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoEventClient<$Result.GetResult<Prisma.$EventoEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventoEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventoEvents
     * const eventoEvents = await prisma.eventoEvent.findMany()
     * 
     * // Get first 10 EventoEvents
     * const eventoEvents = await prisma.eventoEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoEventWithIdOnly = await prisma.eventoEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventoEventFindManyArgs>(args?: SelectSubset<T, EventoEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventoEvent.
     * @param {EventoEventCreateArgs} args - Arguments to create a EventoEvent.
     * @example
     * // Create one EventoEvent
     * const EventoEvent = await prisma.eventoEvent.create({
     *   data: {
     *     // ... data to create a EventoEvent
     *   }
     * })
     * 
     */
    create<T extends EventoEventCreateArgs>(args: SelectSubset<T, EventoEventCreateArgs<ExtArgs>>): Prisma__EventoEventClient<$Result.GetResult<Prisma.$EventoEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventoEvents.
     * @param {EventoEventCreateManyArgs} args - Arguments to create many EventoEvents.
     * @example
     * // Create many EventoEvents
     * const eventoEvent = await prisma.eventoEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoEventCreateManyArgs>(args?: SelectSubset<T, EventoEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventoEvents and returns the data saved in the database.
     * @param {EventoEventCreateManyAndReturnArgs} args - Arguments to create many EventoEvents.
     * @example
     * // Create many EventoEvents
     * const eventoEvent = await prisma.eventoEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventoEvents and only return the `id`
     * const eventoEventWithIdOnly = await prisma.eventoEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoEventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventoEvent.
     * @param {EventoEventDeleteArgs} args - Arguments to delete one EventoEvent.
     * @example
     * // Delete one EventoEvent
     * const EventoEvent = await prisma.eventoEvent.delete({
     *   where: {
     *     // ... filter to delete one EventoEvent
     *   }
     * })
     * 
     */
    delete<T extends EventoEventDeleteArgs>(args: SelectSubset<T, EventoEventDeleteArgs<ExtArgs>>): Prisma__EventoEventClient<$Result.GetResult<Prisma.$EventoEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventoEvent.
     * @param {EventoEventUpdateArgs} args - Arguments to update one EventoEvent.
     * @example
     * // Update one EventoEvent
     * const eventoEvent = await prisma.eventoEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoEventUpdateArgs>(args: SelectSubset<T, EventoEventUpdateArgs<ExtArgs>>): Prisma__EventoEventClient<$Result.GetResult<Prisma.$EventoEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventoEvents.
     * @param {EventoEventDeleteManyArgs} args - Arguments to filter EventoEvents to delete.
     * @example
     * // Delete a few EventoEvents
     * const { count } = await prisma.eventoEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoEventDeleteManyArgs>(args?: SelectSubset<T, EventoEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventoEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventoEvents
     * const eventoEvent = await prisma.eventoEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoEventUpdateManyArgs>(args: SelectSubset<T, EventoEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventoEvents and returns the data updated in the database.
     * @param {EventoEventUpdateManyAndReturnArgs} args - Arguments to update many EventoEvents.
     * @example
     * // Update many EventoEvents
     * const eventoEvent = await prisma.eventoEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventoEvents and only return the `id`
     * const eventoEventWithIdOnly = await prisma.eventoEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventoEventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventoEvent.
     * @param {EventoEventUpsertArgs} args - Arguments to update or create a EventoEvent.
     * @example
     * // Update or create a EventoEvent
     * const eventoEvent = await prisma.eventoEvent.upsert({
     *   create: {
     *     // ... data to create a EventoEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventoEvent we want to update
     *   }
     * })
     */
    upsert<T extends EventoEventUpsertArgs>(args: SelectSubset<T, EventoEventUpsertArgs<ExtArgs>>): Prisma__EventoEventClient<$Result.GetResult<Prisma.$EventoEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventoEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoEventCountArgs} args - Arguments to filter EventoEvents to count.
     * @example
     * // Count the number of EventoEvents
     * const count = await prisma.eventoEvent.count({
     *   where: {
     *     // ... the filter for the EventoEvents we want to count
     *   }
     * })
    **/
    count<T extends EventoEventCountArgs>(
      args?: Subset<T, EventoEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventoEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventoEventAggregateArgs>(args: Subset<T, EventoEventAggregateArgs>): Prisma.PrismaPromise<GetEventoEventAggregateType<T>>

    /**
     * Group by EventoEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoEventGroupByArgs} args - Group by arguments.
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
      T extends EventoEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoEventGroupByArgs['orderBy'] }
        : { orderBy?: EventoEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventoEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventoEvent model
   */
  readonly fields: EventoEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventoEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the EventoEvent model
   */
  interface EventoEventFieldRefs {
    readonly id: FieldRef<"EventoEvent", 'Int'>
    readonly name: FieldRef<"EventoEvent", 'String'>
    readonly slug: FieldRef<"EventoEvent", 'String'>
    readonly city: FieldRef<"EventoEvent", 'String'>
    readonly location: FieldRef<"EventoEvent", 'String'>
    readonly date: FieldRef<"EventoEvent", 'DateTime'>
    readonly organizerName: FieldRef<"EventoEvent", 'String'>
    readonly imageUrl: FieldRef<"EventoEvent", 'String'>
    readonly description: FieldRef<"EventoEvent", 'String'>
    readonly createdAt: FieldRef<"EventoEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"EventoEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventoEvent findUnique
   */
  export type EventoEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
    /**
     * Filter, which EventoEvent to fetch.
     */
    where: EventoEventWhereUniqueInput
  }

  /**
   * EventoEvent findUniqueOrThrow
   */
  export type EventoEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
    /**
     * Filter, which EventoEvent to fetch.
     */
    where: EventoEventWhereUniqueInput
  }

  /**
   * EventoEvent findFirst
   */
  export type EventoEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
    /**
     * Filter, which EventoEvent to fetch.
     */
    where?: EventoEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoEvents to fetch.
     */
    orderBy?: EventoEventOrderByWithRelationInput | EventoEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventoEvents.
     */
    cursor?: EventoEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventoEvents.
     */
    distinct?: EventoEventScalarFieldEnum | EventoEventScalarFieldEnum[]
  }

  /**
   * EventoEvent findFirstOrThrow
   */
  export type EventoEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
    /**
     * Filter, which EventoEvent to fetch.
     */
    where?: EventoEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoEvents to fetch.
     */
    orderBy?: EventoEventOrderByWithRelationInput | EventoEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventoEvents.
     */
    cursor?: EventoEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventoEvents.
     */
    distinct?: EventoEventScalarFieldEnum | EventoEventScalarFieldEnum[]
  }

  /**
   * EventoEvent findMany
   */
  export type EventoEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
    /**
     * Filter, which EventoEvents to fetch.
     */
    where?: EventoEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventoEvents to fetch.
     */
    orderBy?: EventoEventOrderByWithRelationInput | EventoEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventoEvents.
     */
    cursor?: EventoEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventoEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventoEvents.
     */
    skip?: number
    distinct?: EventoEventScalarFieldEnum | EventoEventScalarFieldEnum[]
  }

  /**
   * EventoEvent create
   */
  export type EventoEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
    /**
     * The data needed to create a EventoEvent.
     */
    data: XOR<EventoEventCreateInput, EventoEventUncheckedCreateInput>
  }

  /**
   * EventoEvent createMany
   */
  export type EventoEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventoEvents.
     */
    data: EventoEventCreateManyInput | EventoEventCreateManyInput[]
  }

  /**
   * EventoEvent createManyAndReturn
   */
  export type EventoEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
    /**
     * The data used to create many EventoEvents.
     */
    data: EventoEventCreateManyInput | EventoEventCreateManyInput[]
  }

  /**
   * EventoEvent update
   */
  export type EventoEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
    /**
     * The data needed to update a EventoEvent.
     */
    data: XOR<EventoEventUpdateInput, EventoEventUncheckedUpdateInput>
    /**
     * Choose, which EventoEvent to update.
     */
    where: EventoEventWhereUniqueInput
  }

  /**
   * EventoEvent updateMany
   */
  export type EventoEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventoEvents.
     */
    data: XOR<EventoEventUpdateManyMutationInput, EventoEventUncheckedUpdateManyInput>
    /**
     * Filter which EventoEvents to update
     */
    where?: EventoEventWhereInput
    /**
     * Limit how many EventoEvents to update.
     */
    limit?: number
  }

  /**
   * EventoEvent updateManyAndReturn
   */
  export type EventoEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
    /**
     * The data used to update EventoEvents.
     */
    data: XOR<EventoEventUpdateManyMutationInput, EventoEventUncheckedUpdateManyInput>
    /**
     * Filter which EventoEvents to update
     */
    where?: EventoEventWhereInput
    /**
     * Limit how many EventoEvents to update.
     */
    limit?: number
  }

  /**
   * EventoEvent upsert
   */
  export type EventoEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
    /**
     * The filter to search for the EventoEvent to update in case it exists.
     */
    where: EventoEventWhereUniqueInput
    /**
     * In case the EventoEvent found by the `where` argument doesn't exist, create a new EventoEvent with this data.
     */
    create: XOR<EventoEventCreateInput, EventoEventUncheckedCreateInput>
    /**
     * In case the EventoEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoEventUpdateInput, EventoEventUncheckedUpdateInput>
  }

  /**
   * EventoEvent delete
   */
  export type EventoEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
    /**
     * Filter which EventoEvent to delete.
     */
    where: EventoEventWhereUniqueInput
  }

  /**
   * EventoEvent deleteMany
   */
  export type EventoEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventoEvents to delete
     */
    where?: EventoEventWhereInput
    /**
     * Limit how many EventoEvents to delete.
     */
    limit?: number
  }

  /**
   * EventoEvent without action
   */
  export type EventoEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoEvent
     */
    select?: EventoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventoEvent
     */
    omit?: EventoEventOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EventoEventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    city: 'city',
    location: 'location',
    date: 'date',
    organizerName: 'organizerName',
    imageUrl: 'imageUrl',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventoEventScalarFieldEnum = (typeof EventoEventScalarFieldEnum)[keyof typeof EventoEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EventoEventWhereInput = {
    AND?: EventoEventWhereInput | EventoEventWhereInput[]
    OR?: EventoEventWhereInput[]
    NOT?: EventoEventWhereInput | EventoEventWhereInput[]
    id?: IntFilter<"EventoEvent"> | number
    name?: StringFilter<"EventoEvent"> | string
    slug?: StringFilter<"EventoEvent"> | string
    city?: StringFilter<"EventoEvent"> | string
    location?: StringFilter<"EventoEvent"> | string
    date?: DateTimeFilter<"EventoEvent"> | Date | string
    organizerName?: StringFilter<"EventoEvent"> | string
    imageUrl?: StringFilter<"EventoEvent"> | string
    description?: StringFilter<"EventoEvent"> | string
    createdAt?: DateTimeFilter<"EventoEvent"> | Date | string
    updatedAt?: DateTimeFilter<"EventoEvent"> | Date | string
  }

  export type EventoEventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    city?: SortOrder
    location?: SortOrder
    date?: SortOrder
    organizerName?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: EventoEventWhereInput | EventoEventWhereInput[]
    OR?: EventoEventWhereInput[]
    NOT?: EventoEventWhereInput | EventoEventWhereInput[]
    name?: StringFilter<"EventoEvent"> | string
    city?: StringFilter<"EventoEvent"> | string
    location?: StringFilter<"EventoEvent"> | string
    date?: DateTimeFilter<"EventoEvent"> | Date | string
    organizerName?: StringFilter<"EventoEvent"> | string
    imageUrl?: StringFilter<"EventoEvent"> | string
    description?: StringFilter<"EventoEvent"> | string
    createdAt?: DateTimeFilter<"EventoEvent"> | Date | string
    updatedAt?: DateTimeFilter<"EventoEvent"> | Date | string
  }, "id" | "slug">

  export type EventoEventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    city?: SortOrder
    location?: SortOrder
    date?: SortOrder
    organizerName?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventoEventCountOrderByAggregateInput
    _avg?: EventoEventAvgOrderByAggregateInput
    _max?: EventoEventMaxOrderByAggregateInput
    _min?: EventoEventMinOrderByAggregateInput
    _sum?: EventoEventSumOrderByAggregateInput
  }

  export type EventoEventScalarWhereWithAggregatesInput = {
    AND?: EventoEventScalarWhereWithAggregatesInput | EventoEventScalarWhereWithAggregatesInput[]
    OR?: EventoEventScalarWhereWithAggregatesInput[]
    NOT?: EventoEventScalarWhereWithAggregatesInput | EventoEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventoEvent"> | number
    name?: StringWithAggregatesFilter<"EventoEvent"> | string
    slug?: StringWithAggregatesFilter<"EventoEvent"> | string
    city?: StringWithAggregatesFilter<"EventoEvent"> | string
    location?: StringWithAggregatesFilter<"EventoEvent"> | string
    date?: DateTimeWithAggregatesFilter<"EventoEvent"> | Date | string
    organizerName?: StringWithAggregatesFilter<"EventoEvent"> | string
    imageUrl?: StringWithAggregatesFilter<"EventoEvent"> | string
    description?: StringWithAggregatesFilter<"EventoEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventoEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventoEvent"> | Date | string
  }

  export type EventoEventCreateInput = {
    name: string
    slug: string
    city: string
    location: string
    date: Date | string
    organizerName: string
    imageUrl: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoEventUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    city: string
    location: string
    date: Date | string
    organizerName: string
    imageUrl: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoEventUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoEventCreateManyInput = {
    id?: number
    name: string
    slug: string
    city: string
    location: string
    date: Date | string
    organizerName: string
    imageUrl: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventoEventUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventoEventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    city?: SortOrder
    location?: SortOrder
    date?: SortOrder
    organizerName?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoEventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventoEventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    city?: SortOrder
    location?: SortOrder
    date?: SortOrder
    organizerName?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoEventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    city?: SortOrder
    location?: SortOrder
    date?: SortOrder
    organizerName?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventoEventSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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