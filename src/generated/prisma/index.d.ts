
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Especialidad
 * 
 */
export type Especialidad = $Result.DefaultSelection<Prisma.$EspecialidadPayload>
/**
 * Model Medico
 * 
 */
export type Medico = $Result.DefaultSelection<Prisma.$MedicoPayload>
/**
 * Model Cita
 * 
 */
export type Cita = $Result.DefaultSelection<Prisma.$CitaPayload>
/**
 * Model HistoriaClinica
 * 
 */
export type HistoriaClinica = $Result.DefaultSelection<Prisma.$HistoriaClinicaPayload>
/**
 * Model Mensaje
 * 
 */
export type Mensaje = $Result.DefaultSelection<Prisma.$MensajePayload>
/**
 * Model Auditoria
 * 
 */
export type Auditoria = $Result.DefaultSelection<Prisma.$AuditoriaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especialidad`: Exposes CRUD operations for the **Especialidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidads
    * const especialidads = await prisma.especialidad.findMany()
    * ```
    */
  get especialidad(): Prisma.EspecialidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medico`: Exposes CRUD operations for the **Medico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicos
    * const medicos = await prisma.medico.findMany()
    * ```
    */
  get medico(): Prisma.MedicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cita`: Exposes CRUD operations for the **Cita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Citas
    * const citas = await prisma.cita.findMany()
    * ```
    */
  get cita(): Prisma.CitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historiaClinica`: Exposes CRUD operations for the **HistoriaClinica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoriaClinicas
    * const historiaClinicas = await prisma.historiaClinica.findMany()
    * ```
    */
  get historiaClinica(): Prisma.HistoriaClinicaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensaje`: Exposes CRUD operations for the **Mensaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensajes
    * const mensajes = await prisma.mensaje.findMany()
    * ```
    */
  get mensaje(): Prisma.MensajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditoria`: Exposes CRUD operations for the **Auditoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auditorias
    * const auditorias = await prisma.auditoria.findMany()
    * ```
    */
  get auditoria(): Prisma.AuditoriaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Usuario: 'Usuario',
    Especialidad: 'Especialidad',
    Medico: 'Medico',
    Cita: 'Cita',
    HistoriaClinica: 'HistoriaClinica',
    Mensaje: 'Mensaje',
    Auditoria: 'Auditoria'
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
      modelProps: "usuario" | "especialidad" | "medico" | "cita" | "historiaClinica" | "mensaje" | "auditoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Especialidad: {
        payload: Prisma.$EspecialidadPayload<ExtArgs>
        fields: Prisma.EspecialidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecialidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecialidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findFirst: {
            args: Prisma.EspecialidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecialidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findMany: {
            args: Prisma.EspecialidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>[]
          }
          create: {
            args: Prisma.EspecialidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          createMany: {
            args: Prisma.EspecialidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EspecialidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          update: {
            args: Prisma.EspecialidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          deleteMany: {
            args: Prisma.EspecialidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecialidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EspecialidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          aggregate: {
            args: Prisma.EspecialidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidad>
          }
          groupBy: {
            args: Prisma.EspecialidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecialidadCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadCountAggregateOutputType> | number
          }
        }
      }
      Medico: {
        payload: Prisma.$MedicoPayload<ExtArgs>
        fields: Prisma.MedicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findFirst: {
            args: Prisma.MedicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findMany: {
            args: Prisma.MedicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          create: {
            args: Prisma.MedicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          createMany: {
            args: Prisma.MedicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          update: {
            args: Prisma.MedicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          deleteMany: {
            args: Prisma.MedicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          aggregate: {
            args: Prisma.MedicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedico>
          }
          groupBy: {
            args: Prisma.MedicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicoCountArgs<ExtArgs>
            result: $Utils.Optional<MedicoCountAggregateOutputType> | number
          }
        }
      }
      Cita: {
        payload: Prisma.$CitaPayload<ExtArgs>
        fields: Prisma.CitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findFirst: {
            args: Prisma.CitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findMany: {
            args: Prisma.CitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          create: {
            args: Prisma.CitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          createMany: {
            args: Prisma.CitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          update: {
            args: Prisma.CitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          deleteMany: {
            args: Prisma.CitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          aggregate: {
            args: Prisma.CitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCita>
          }
          groupBy: {
            args: Prisma.CitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitaCountArgs<ExtArgs>
            result: $Utils.Optional<CitaCountAggregateOutputType> | number
          }
        }
      }
      HistoriaClinica: {
        payload: Prisma.$HistoriaClinicaPayload<ExtArgs>
        fields: Prisma.HistoriaClinicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoriaClinicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          findFirst: {
            args: Prisma.HistoriaClinicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoriaClinicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          findMany: {
            args: Prisma.HistoriaClinicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>[]
          }
          create: {
            args: Prisma.HistoriaClinicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          createMany: {
            args: Prisma.HistoriaClinicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoriaClinicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          update: {
            args: Prisma.HistoriaClinicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          deleteMany: {
            args: Prisma.HistoriaClinicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoriaClinicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoriaClinicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          aggregate: {
            args: Prisma.HistoriaClinicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoriaClinica>
          }
          groupBy: {
            args: Prisma.HistoriaClinicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoriaClinicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoriaClinicaCountArgs<ExtArgs>
            result: $Utils.Optional<HistoriaClinicaCountAggregateOutputType> | number
          }
        }
      }
      Mensaje: {
        payload: Prisma.$MensajePayload<ExtArgs>
        fields: Prisma.MensajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findFirst: {
            args: Prisma.MensajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          findMany: {
            args: Prisma.MensajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>[]
          }
          create: {
            args: Prisma.MensajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          createMany: {
            args: Prisma.MensajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MensajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          update: {
            args: Prisma.MensajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          deleteMany: {
            args: Prisma.MensajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MensajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajePayload>
          }
          aggregate: {
            args: Prisma.MensajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensaje>
          }
          groupBy: {
            args: Prisma.MensajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensajeCountArgs<ExtArgs>
            result: $Utils.Optional<MensajeCountAggregateOutputType> | number
          }
        }
      }
      Auditoria: {
        payload: Prisma.$AuditoriaPayload<ExtArgs>
        fields: Prisma.AuditoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          findFirst: {
            args: Prisma.AuditoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          findMany: {
            args: Prisma.AuditoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>[]
          }
          create: {
            args: Prisma.AuditoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          createMany: {
            args: Prisma.AuditoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          update: {
            args: Prisma.AuditoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          deleteMany: {
            args: Prisma.AuditoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditoriaPayload>
          }
          aggregate: {
            args: Prisma.AuditoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditoria>
          }
          groupBy: {
            args: Prisma.AuditoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditoriaCountArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    especialidad?: EspecialidadOmit
    medico?: MedicoOmit
    cita?: CitaOmit
    historiaClinica?: HistoriaClinicaOmit
    mensaje?: MensajeOmit
    auditoria?: AuditoriaOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    citas: number
    historias: number
    mensajesEnviados: number
    mensajesRecibidos: number
    auditorias: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | UsuarioCountOutputTypeCountCitasArgs
    historias?: boolean | UsuarioCountOutputTypeCountHistoriasArgs
    mensajesEnviados?: boolean | UsuarioCountOutputTypeCountMensajesEnviadosArgs
    mensajesRecibidos?: boolean | UsuarioCountOutputTypeCountMensajesRecibidosArgs
    auditorias?: boolean | UsuarioCountOutputTypeCountAuditoriasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHistoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriaClinicaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMensajesEnviadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMensajesRecibidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAuditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditoriaWhereInput
  }


  /**
   * Count Type EspecialidadCountOutputType
   */

  export type EspecialidadCountOutputType = {
    medicos: number
  }

  export type EspecialidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicos?: boolean | EspecialidadCountOutputTypeCountMedicosArgs
  }

  // Custom InputTypes
  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadCountOutputType
     */
    select?: EspecialidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeCountMedicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicoWhereInput
  }


  /**
   * Count Type MedicoCountOutputType
   */

  export type MedicoCountOutputType = {
    citas: number
    historias: number
  }

  export type MedicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | MedicoCountOutputTypeCountCitasArgs
    historias?: boolean | MedicoCountOutputTypeCountHistoriasArgs
  }

  // Custom InputTypes
  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicoCountOutputType
     */
    select?: MedicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountHistoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriaClinicaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    contraseña: string | null
    rol: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    contraseña: string | null
    rol: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    contraseña: number
    rol: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contraseña?: true
    rol?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contraseña?: true
    rol?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contraseña?: true
    rol?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    contraseña: string
    rol: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    contraseña?: boolean
    rol?: boolean
    medico?: boolean | Usuario$medicoArgs<ExtArgs>
    citas?: boolean | Usuario$citasArgs<ExtArgs>
    historias?: boolean | Usuario$historiasArgs<ExtArgs>
    mensajesEnviados?: boolean | Usuario$mensajesEnviadosArgs<ExtArgs>
    mensajesRecibidos?: boolean | Usuario$mensajesRecibidosArgs<ExtArgs>
    auditorias?: boolean | Usuario$auditoriasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    contraseña?: boolean
    rol?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "contraseña" | "rol", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | Usuario$medicoArgs<ExtArgs>
    citas?: boolean | Usuario$citasArgs<ExtArgs>
    historias?: boolean | Usuario$historiasArgs<ExtArgs>
    mensajesEnviados?: boolean | Usuario$mensajesEnviadosArgs<ExtArgs>
    mensajesRecibidos?: boolean | Usuario$mensajesRecibidosArgs<ExtArgs>
    auditorias?: boolean | Usuario$auditoriasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      medico: Prisma.$MedicoPayload<ExtArgs> | null
      citas: Prisma.$CitaPayload<ExtArgs>[]
      historias: Prisma.$HistoriaClinicaPayload<ExtArgs>[]
      mensajesEnviados: Prisma.$MensajePayload<ExtArgs>[]
      mensajesRecibidos: Prisma.$MensajePayload<ExtArgs>[]
      auditorias: Prisma.$AuditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      contraseña: string
      rol: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medico<T extends Usuario$medicoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$medicoArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    citas<T extends Usuario$citasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historias<T extends Usuario$historiasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$historiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensajesEnviados<T extends Usuario$mensajesEnviadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$mensajesEnviadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensajesRecibidos<T extends Usuario$mensajesRecibidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$mensajesRecibidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditorias<T extends Usuario$auditoriasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$auditoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly contraseña: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.medico
   */
  export type Usuario$medicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    where?: MedicoWhereInput
  }

  /**
   * Usuario.citas
   */
  export type Usuario$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Usuario.historias
   */
  export type Usuario$historiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    where?: HistoriaClinicaWhereInput
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    cursor?: HistoriaClinicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * Usuario.mensajesEnviados
   */
  export type Usuario$mensajesEnviadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Usuario.mensajesRecibidos
   */
  export type Usuario$mensajesRecibidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    cursor?: MensajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Usuario.auditorias
   */
  export type Usuario$auditoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    where?: AuditoriaWhereInput
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    cursor?: AuditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Especialidad
   */

  export type AggregateEspecialidad = {
    _count: EspecialidadCountAggregateOutputType | null
    _avg: EspecialidadAvgAggregateOutputType | null
    _sum: EspecialidadSumAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  export type EspecialidadAvgAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadSumAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EspecialidadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EspecialidadCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type EspecialidadAvgAggregateInputType = {
    id?: true
  }

  export type EspecialidadSumAggregateInputType = {
    id?: true
  }

  export type EspecialidadMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EspecialidadMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EspecialidadCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type EspecialidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidad to aggregate.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especialidads
    **/
    _count?: true | EspecialidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecialidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecialidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadMaxAggregateInputType
  }

  export type GetEspecialidadAggregateType<T extends EspecialidadAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidad[P]>
      : GetScalarType<T[P], AggregateEspecialidad[P]>
  }




  export type EspecialidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadWhereInput
    orderBy?: EspecialidadOrderByWithAggregationInput | EspecialidadOrderByWithAggregationInput[]
    by: EspecialidadScalarFieldEnum[] | EspecialidadScalarFieldEnum
    having?: EspecialidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadCountAggregateInputType | true
    _avg?: EspecialidadAvgAggregateInputType
    _sum?: EspecialidadSumAggregateInputType
    _min?: EspecialidadMinAggregateInputType
    _max?: EspecialidadMaxAggregateInputType
  }

  export type EspecialidadGroupByOutputType = {
    id: number
    nombre: string
    _count: EspecialidadCountAggregateOutputType | null
    _avg: EspecialidadAvgAggregateOutputType | null
    _sum: EspecialidadSumAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  type GetEspecialidadGroupByPayload<T extends EspecialidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
        }
      >
    >


  export type EspecialidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    medicos?: boolean | Especialidad$medicosArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialidad"]>



  export type EspecialidadSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type EspecialidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["especialidad"]>
  export type EspecialidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicos?: boolean | Especialidad$medicosArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EspecialidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialidad"
    objects: {
      medicos: Prisma.$MedicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["especialidad"]>
    composites: {}
  }

  type EspecialidadGetPayload<S extends boolean | null | undefined | EspecialidadDefaultArgs> = $Result.GetResult<Prisma.$EspecialidadPayload, S>

  type EspecialidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecialidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecialidadCountAggregateInputType | true
    }

  export interface EspecialidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especialidad'], meta: { name: 'Especialidad' } }
    /**
     * Find zero or one Especialidad that matches the filter.
     * @param {EspecialidadFindUniqueArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadFindUniqueArgs>(args: SelectSubset<T, EspecialidadFindUniqueArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especialidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecialidadFindUniqueOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecialidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadFindFirstArgs>(args?: SelectSubset<T, EspecialidadFindFirstArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecialidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidads
     * const especialidads = await prisma.especialidad.findMany()
     * 
     * // Get first 10 Especialidads
     * const especialidads = await prisma.especialidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especialidadWithIdOnly = await prisma.especialidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecialidadFindManyArgs>(args?: SelectSubset<T, EspecialidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especialidad.
     * @param {EspecialidadCreateArgs} args - Arguments to create a Especialidad.
     * @example
     * // Create one Especialidad
     * const Especialidad = await prisma.especialidad.create({
     *   data: {
     *     // ... data to create a Especialidad
     *   }
     * })
     * 
     */
    create<T extends EspecialidadCreateArgs>(args: SelectSubset<T, EspecialidadCreateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especialidads.
     * @param {EspecialidadCreateManyArgs} args - Arguments to create many Especialidads.
     * @example
     * // Create many Especialidads
     * const especialidad = await prisma.especialidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecialidadCreateManyArgs>(args?: SelectSubset<T, EspecialidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Especialidad.
     * @param {EspecialidadDeleteArgs} args - Arguments to delete one Especialidad.
     * @example
     * // Delete one Especialidad
     * const Especialidad = await prisma.especialidad.delete({
     *   where: {
     *     // ... filter to delete one Especialidad
     *   }
     * })
     * 
     */
    delete<T extends EspecialidadDeleteArgs>(args: SelectSubset<T, EspecialidadDeleteArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especialidad.
     * @param {EspecialidadUpdateArgs} args - Arguments to update one Especialidad.
     * @example
     * // Update one Especialidad
     * const especialidad = await prisma.especialidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecialidadUpdateArgs>(args: SelectSubset<T, EspecialidadUpdateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especialidads.
     * @param {EspecialidadDeleteManyArgs} args - Arguments to filter Especialidads to delete.
     * @example
     * // Delete a few Especialidads
     * const { count } = await prisma.especialidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecialidadDeleteManyArgs>(args?: SelectSubset<T, EspecialidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidads
     * const especialidad = await prisma.especialidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecialidadUpdateManyArgs>(args: SelectSubset<T, EspecialidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Especialidad.
     * @param {EspecialidadUpsertArgs} args - Arguments to update or create a Especialidad.
     * @example
     * // Update or create a Especialidad
     * const especialidad = await prisma.especialidad.upsert({
     *   create: {
     *     // ... data to create a Especialidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidad we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadUpsertArgs>(args: SelectSubset<T, EspecialidadUpsertArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadCountArgs} args - Arguments to filter Especialidads to count.
     * @example
     * // Count the number of Especialidads
     * const count = await prisma.especialidad.count({
     *   where: {
     *     // ... the filter for the Especialidads we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadCountArgs>(
      args?: Subset<T, EspecialidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadAggregateArgs>(args: Subset<T, EspecialidadAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadAggregateType<T>>

    /**
     * Group by Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadGroupByArgs} args - Group by arguments.
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
      T extends EspecialidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecialidadGroupByArgs['orderBy'] }
        : { orderBy?: EspecialidadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecialidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especialidad model
   */
  readonly fields: EspecialidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especialidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecialidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicos<T extends Especialidad$medicosArgs<ExtArgs> = {}>(args?: Subset<T, Especialidad$medicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Especialidad model
   */
  interface EspecialidadFieldRefs {
    readonly id: FieldRef<"Especialidad", 'Int'>
    readonly nombre: FieldRef<"Especialidad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Especialidad findUnique
   */
  export type EspecialidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findUniqueOrThrow
   */
  export type EspecialidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findFirst
   */
  export type EspecialidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findFirstOrThrow
   */
  export type EspecialidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findMany
   */
  export type EspecialidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidads to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad create
   */
  export type EspecialidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Especialidad.
     */
    data: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
  }

  /**
   * Especialidad createMany
   */
  export type EspecialidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidads.
     */
    data: EspecialidadCreateManyInput | EspecialidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidad update
   */
  export type EspecialidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Especialidad.
     */
    data: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
    /**
     * Choose, which Especialidad to update.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad updateMany
   */
  export type EspecialidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidads.
     */
    data: XOR<EspecialidadUpdateManyMutationInput, EspecialidadUncheckedUpdateManyInput>
    /**
     * Filter which Especialidads to update
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to update.
     */
    limit?: number
  }

  /**
   * Especialidad upsert
   */
  export type EspecialidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Especialidad to update in case it exists.
     */
    where: EspecialidadWhereUniqueInput
    /**
     * In case the Especialidad found by the `where` argument doesn't exist, create a new Especialidad with this data.
     */
    create: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
    /**
     * In case the Especialidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
  }

  /**
   * Especialidad delete
   */
  export type EspecialidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter which Especialidad to delete.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad deleteMany
   */
  export type EspecialidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidads to delete
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to delete.
     */
    limit?: number
  }

  /**
   * Especialidad.medicos
   */
  export type Especialidad$medicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    where?: MedicoWhereInput
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    cursor?: MedicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Especialidad without action
   */
  export type EspecialidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
  }


  /**
   * Model Medico
   */

  export type AggregateMedico = {
    _count: MedicoCountAggregateOutputType | null
    _avg: MedicoAvgAggregateOutputType | null
    _sum: MedicoSumAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  export type MedicoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    especialidadId: number | null
  }

  export type MedicoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    especialidadId: number | null
  }

  export type MedicoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    especialidadId: number | null
  }

  export type MedicoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    especialidadId: number | null
  }

  export type MedicoCountAggregateOutputType = {
    id: number
    usuarioId: number
    especialidadId: number
    _all: number
  }


  export type MedicoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
  }

  export type MedicoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
  }

  export type MedicoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
  }

  export type MedicoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
  }

  export type MedicoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
    _all?: true
  }

  export type MedicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico to aggregate.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicos
    **/
    _count?: true | MedicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicoMaxAggregateInputType
  }

  export type GetMedicoAggregateType<T extends MedicoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedico[P]>
      : GetScalarType<T[P], AggregateMedico[P]>
  }




  export type MedicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicoWhereInput
    orderBy?: MedicoOrderByWithAggregationInput | MedicoOrderByWithAggregationInput[]
    by: MedicoScalarFieldEnum[] | MedicoScalarFieldEnum
    having?: MedicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicoCountAggregateInputType | true
    _avg?: MedicoAvgAggregateInputType
    _sum?: MedicoSumAggregateInputType
    _min?: MedicoMinAggregateInputType
    _max?: MedicoMaxAggregateInputType
  }

  export type MedicoGroupByOutputType = {
    id: number
    usuarioId: number
    especialidadId: number
    _count: MedicoCountAggregateOutputType | null
    _avg: MedicoAvgAggregateOutputType | null
    _sum: MedicoSumAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  type GetMedicoGroupByPayload<T extends MedicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicoGroupByOutputType[P]>
            : GetScalarType<T[P], MedicoGroupByOutputType[P]>
        }
      >
    >


  export type MedicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    especialidadId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    citas?: boolean | Medico$citasArgs<ExtArgs>
    historias?: boolean | Medico$historiasArgs<ExtArgs>
    _count?: boolean | MedicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico"]>



  export type MedicoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    especialidadId?: boolean
  }

  export type MedicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "especialidadId", ExtArgs["result"]["medico"]>
  export type MedicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    citas?: boolean | Medico$citasArgs<ExtArgs>
    historias?: boolean | Medico$historiasArgs<ExtArgs>
    _count?: boolean | MedicoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medico"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      especialidad: Prisma.$EspecialidadPayload<ExtArgs>
      citas: Prisma.$CitaPayload<ExtArgs>[]
      historias: Prisma.$HistoriaClinicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      especialidadId: number
    }, ExtArgs["result"]["medico"]>
    composites: {}
  }

  type MedicoGetPayload<S extends boolean | null | undefined | MedicoDefaultArgs> = $Result.GetResult<Prisma.$MedicoPayload, S>

  type MedicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicoCountAggregateInputType | true
    }

  export interface MedicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medico'], meta: { name: 'Medico' } }
    /**
     * Find zero or one Medico that matches the filter.
     * @param {MedicoFindUniqueArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicoFindUniqueArgs>(args: SelectSubset<T, MedicoFindUniqueArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicoFindUniqueOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicoFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicoFindFirstArgs>(args?: SelectSubset<T, MedicoFindFirstArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicoFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicos
     * const medicos = await prisma.medico.findMany()
     * 
     * // Get first 10 Medicos
     * const medicos = await prisma.medico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicoWithIdOnly = await prisma.medico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicoFindManyArgs>(args?: SelectSubset<T, MedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medico.
     * @param {MedicoCreateArgs} args - Arguments to create a Medico.
     * @example
     * // Create one Medico
     * const Medico = await prisma.medico.create({
     *   data: {
     *     // ... data to create a Medico
     *   }
     * })
     * 
     */
    create<T extends MedicoCreateArgs>(args: SelectSubset<T, MedicoCreateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicos.
     * @param {MedicoCreateManyArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicoCreateManyArgs>(args?: SelectSubset<T, MedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medico.
     * @param {MedicoDeleteArgs} args - Arguments to delete one Medico.
     * @example
     * // Delete one Medico
     * const Medico = await prisma.medico.delete({
     *   where: {
     *     // ... filter to delete one Medico
     *   }
     * })
     * 
     */
    delete<T extends MedicoDeleteArgs>(args: SelectSubset<T, MedicoDeleteArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medico.
     * @param {MedicoUpdateArgs} args - Arguments to update one Medico.
     * @example
     * // Update one Medico
     * const medico = await prisma.medico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicoUpdateArgs>(args: SelectSubset<T, MedicoUpdateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicos.
     * @param {MedicoDeleteManyArgs} args - Arguments to filter Medicos to delete.
     * @example
     * // Delete a few Medicos
     * const { count } = await prisma.medico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicoDeleteManyArgs>(args?: SelectSubset<T, MedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicos
     * const medico = await prisma.medico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicoUpdateManyArgs>(args: SelectSubset<T, MedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medico.
     * @param {MedicoUpsertArgs} args - Arguments to update or create a Medico.
     * @example
     * // Update or create a Medico
     * const medico = await prisma.medico.upsert({
     *   create: {
     *     // ... data to create a Medico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medico we want to update
     *   }
     * })
     */
    upsert<T extends MedicoUpsertArgs>(args: SelectSubset<T, MedicoUpsertArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoCountArgs} args - Arguments to filter Medicos to count.
     * @example
     * // Count the number of Medicos
     * const count = await prisma.medico.count({
     *   where: {
     *     // ... the filter for the Medicos we want to count
     *   }
     * })
    **/
    count<T extends MedicoCountArgs>(
      args?: Subset<T, MedicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicoAggregateArgs>(args: Subset<T, MedicoAggregateArgs>): Prisma.PrismaPromise<GetMedicoAggregateType<T>>

    /**
     * Group by Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoGroupByArgs} args - Group by arguments.
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
      T extends MedicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicoGroupByArgs['orderBy'] }
        : { orderBy?: MedicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medico model
   */
  readonly fields: MedicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    especialidad<T extends EspecialidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecialidadDefaultArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    citas<T extends Medico$citasArgs<ExtArgs> = {}>(args?: Subset<T, Medico$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historias<T extends Medico$historiasArgs<ExtArgs> = {}>(args?: Subset<T, Medico$historiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medico model
   */
  interface MedicoFieldRefs {
    readonly id: FieldRef<"Medico", 'Int'>
    readonly usuarioId: FieldRef<"Medico", 'Int'>
    readonly especialidadId: FieldRef<"Medico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Medico findUnique
   */
  export type MedicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findUniqueOrThrow
   */
  export type MedicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findFirst
   */
  export type MedicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findFirstOrThrow
   */
  export type MedicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findMany
   */
  export type MedicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medicos to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico create
   */
  export type MedicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medico.
     */
    data: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
  }

  /**
   * Medico createMany
   */
  export type MedicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicos.
     */
    data: MedicoCreateManyInput | MedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medico update
   */
  export type MedicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medico.
     */
    data: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
    /**
     * Choose, which Medico to update.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico updateMany
   */
  export type MedicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicos.
     */
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyInput>
    /**
     * Filter which Medicos to update
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to update.
     */
    limit?: number
  }

  /**
   * Medico upsert
   */
  export type MedicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medico to update in case it exists.
     */
    where: MedicoWhereUniqueInput
    /**
     * In case the Medico found by the `where` argument doesn't exist, create a new Medico with this data.
     */
    create: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
    /**
     * In case the Medico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
  }

  /**
   * Medico delete
   */
  export type MedicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter which Medico to delete.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico deleteMany
   */
  export type MedicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicos to delete
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to delete.
     */
    limit?: number
  }

  /**
   * Medico.citas
   */
  export type Medico$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Medico.historias
   */
  export type Medico$historiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    where?: HistoriaClinicaWhereInput
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    cursor?: HistoriaClinicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * Medico without action
   */
  export type MedicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
  }


  /**
   * Model Cita
   */

  export type AggregateCita = {
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  export type CitaAvgAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type CitaSumAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type CitaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    hora: Date | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type CitaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    hora: Date | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type CitaCountAggregateOutputType = {
    id: number
    fecha: number
    hora: number
    pacienteId: number
    medicoId: number
    _all: number
  }


  export type CitaAvgAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
  }

  export type CitaSumAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
  }

  export type CitaMinAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    pacienteId?: true
    medicoId?: true
  }

  export type CitaMaxAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    pacienteId?: true
    medicoId?: true
  }

  export type CitaCountAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    pacienteId?: true
    medicoId?: true
    _all?: true
  }

  export type CitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cita to aggregate.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Citas
    **/
    _count?: true | CitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitaMaxAggregateInputType
  }

  export type GetCitaAggregateType<T extends CitaAggregateArgs> = {
        [P in keyof T & keyof AggregateCita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCita[P]>
      : GetScalarType<T[P], AggregateCita[P]>
  }




  export type CitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithAggregationInput | CitaOrderByWithAggregationInput[]
    by: CitaScalarFieldEnum[] | CitaScalarFieldEnum
    having?: CitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitaCountAggregateInputType | true
    _avg?: CitaAvgAggregateInputType
    _sum?: CitaSumAggregateInputType
    _min?: CitaMinAggregateInputType
    _max?: CitaMaxAggregateInputType
  }

  export type CitaGroupByOutputType = {
    id: number
    fecha: Date
    hora: Date
    pacienteId: number
    medicoId: number
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  type GetCitaGroupByPayload<T extends CitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitaGroupByOutputType[P]>
            : GetScalarType<T[P], CitaGroupByOutputType[P]>
        }
      >
    >


  export type CitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    hora?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    paciente?: boolean | UsuarioDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>



  export type CitaSelectScalar = {
    id?: boolean
    fecha?: boolean
    hora?: boolean
    pacienteId?: boolean
    medicoId?: boolean
  }

  export type CitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "hora" | "pacienteId" | "medicoId", ExtArgs["result"]["cita"]>
  export type CitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | UsuarioDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }

  export type $CitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cita"
    objects: {
      paciente: Prisma.$UsuarioPayload<ExtArgs>
      medico: Prisma.$MedicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      hora: Date
      pacienteId: number
      medicoId: number
    }, ExtArgs["result"]["cita"]>
    composites: {}
  }

  type CitaGetPayload<S extends boolean | null | undefined | CitaDefaultArgs> = $Result.GetResult<Prisma.$CitaPayload, S>

  type CitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitaCountAggregateInputType | true
    }

  export interface CitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cita'], meta: { name: 'Cita' } }
    /**
     * Find zero or one Cita that matches the filter.
     * @param {CitaFindUniqueArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitaFindUniqueArgs>(args: SelectSubset<T, CitaFindUniqueArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitaFindUniqueOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitaFindUniqueOrThrowArgs>(args: SelectSubset<T, CitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitaFindFirstArgs>(args?: SelectSubset<T, CitaFindFirstArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitaFindFirstOrThrowArgs>(args?: SelectSubset<T, CitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citas
     * const citas = await prisma.cita.findMany()
     * 
     * // Get first 10 Citas
     * const citas = await prisma.cita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citaWithIdOnly = await prisma.cita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CitaFindManyArgs>(args?: SelectSubset<T, CitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cita.
     * @param {CitaCreateArgs} args - Arguments to create a Cita.
     * @example
     * // Create one Cita
     * const Cita = await prisma.cita.create({
     *   data: {
     *     // ... data to create a Cita
     *   }
     * })
     * 
     */
    create<T extends CitaCreateArgs>(args: SelectSubset<T, CitaCreateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Citas.
     * @param {CitaCreateManyArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const cita = await prisma.cita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitaCreateManyArgs>(args?: SelectSubset<T, CitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cita.
     * @param {CitaDeleteArgs} args - Arguments to delete one Cita.
     * @example
     * // Delete one Cita
     * const Cita = await prisma.cita.delete({
     *   where: {
     *     // ... filter to delete one Cita
     *   }
     * })
     * 
     */
    delete<T extends CitaDeleteArgs>(args: SelectSubset<T, CitaDeleteArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cita.
     * @param {CitaUpdateArgs} args - Arguments to update one Cita.
     * @example
     * // Update one Cita
     * const cita = await prisma.cita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitaUpdateArgs>(args: SelectSubset<T, CitaUpdateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Citas.
     * @param {CitaDeleteManyArgs} args - Arguments to filter Citas to delete.
     * @example
     * // Delete a few Citas
     * const { count } = await prisma.cita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitaDeleteManyArgs>(args?: SelectSubset<T, CitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citas
     * const cita = await prisma.cita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitaUpdateManyArgs>(args: SelectSubset<T, CitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cita.
     * @param {CitaUpsertArgs} args - Arguments to update or create a Cita.
     * @example
     * // Update or create a Cita
     * const cita = await prisma.cita.upsert({
     *   create: {
     *     // ... data to create a Cita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cita we want to update
     *   }
     * })
     */
    upsert<T extends CitaUpsertArgs>(args: SelectSubset<T, CitaUpsertArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaCountArgs} args - Arguments to filter Citas to count.
     * @example
     * // Count the number of Citas
     * const count = await prisma.cita.count({
     *   where: {
     *     // ... the filter for the Citas we want to count
     *   }
     * })
    **/
    count<T extends CitaCountArgs>(
      args?: Subset<T, CitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitaAggregateArgs>(args: Subset<T, CitaAggregateArgs>): Prisma.PrismaPromise<GetCitaAggregateType<T>>

    /**
     * Group by Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaGroupByArgs} args - Group by arguments.
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
      T extends CitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitaGroupByArgs['orderBy'] }
        : { orderBy?: CitaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cita model
   */
  readonly fields: CitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cita model
   */
  interface CitaFieldRefs {
    readonly id: FieldRef<"Cita", 'Int'>
    readonly fecha: FieldRef<"Cita", 'DateTime'>
    readonly hora: FieldRef<"Cita", 'DateTime'>
    readonly pacienteId: FieldRef<"Cita", 'Int'>
    readonly medicoId: FieldRef<"Cita", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cita findUnique
   */
  export type CitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findUniqueOrThrow
   */
  export type CitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findFirst
   */
  export type CitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findFirstOrThrow
   */
  export type CitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findMany
   */
  export type CitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita create
   */
  export type CitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cita.
     */
    data: XOR<CitaCreateInput, CitaUncheckedCreateInput>
  }

  /**
   * Cita createMany
   */
  export type CitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Citas.
     */
    data: CitaCreateManyInput | CitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cita update
   */
  export type CitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cita.
     */
    data: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
    /**
     * Choose, which Cita to update.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita updateMany
   */
  export type CitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Citas.
     */
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to update.
     */
    limit?: number
  }

  /**
   * Cita upsert
   */
  export type CitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cita to update in case it exists.
     */
    where: CitaWhereUniqueInput
    /**
     * In case the Cita found by the `where` argument doesn't exist, create a new Cita with this data.
     */
    create: XOR<CitaCreateInput, CitaUncheckedCreateInput>
    /**
     * In case the Cita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
  }

  /**
   * Cita delete
   */
  export type CitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter which Cita to delete.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita deleteMany
   */
  export type CitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citas to delete
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to delete.
     */
    limit?: number
  }

  /**
   * Cita without action
   */
  export type CitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
  }


  /**
   * Model HistoriaClinica
   */

  export type AggregateHistoriaClinica = {
    _count: HistoriaClinicaCountAggregateOutputType | null
    _avg: HistoriaClinicaAvgAggregateOutputType | null
    _sum: HistoriaClinicaSumAggregateOutputType | null
    _min: HistoriaClinicaMinAggregateOutputType | null
    _max: HistoriaClinicaMaxAggregateOutputType | null
  }

  export type HistoriaClinicaAvgAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type HistoriaClinicaSumAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    medicoId: number | null
  }

  export type HistoriaClinicaMinAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    medicoId: number | null
    fecha: Date | null
    descripcion: string | null
  }

  export type HistoriaClinicaMaxAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    medicoId: number | null
    fecha: Date | null
    descripcion: string | null
  }

  export type HistoriaClinicaCountAggregateOutputType = {
    id: number
    pacienteId: number
    medicoId: number
    fecha: number
    descripcion: number
    _all: number
  }


  export type HistoriaClinicaAvgAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
  }

  export type HistoriaClinicaSumAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
  }

  export type HistoriaClinicaMinAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
    fecha?: true
    descripcion?: true
  }

  export type HistoriaClinicaMaxAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
    fecha?: true
    descripcion?: true
  }

  export type HistoriaClinicaCountAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
    fecha?: true
    descripcion?: true
    _all?: true
  }

  export type HistoriaClinicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriaClinica to aggregate.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoriaClinicas
    **/
    _count?: true | HistoriaClinicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoriaClinicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoriaClinicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoriaClinicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoriaClinicaMaxAggregateInputType
  }

  export type GetHistoriaClinicaAggregateType<T extends HistoriaClinicaAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoriaClinica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoriaClinica[P]>
      : GetScalarType<T[P], AggregateHistoriaClinica[P]>
  }




  export type HistoriaClinicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriaClinicaWhereInput
    orderBy?: HistoriaClinicaOrderByWithAggregationInput | HistoriaClinicaOrderByWithAggregationInput[]
    by: HistoriaClinicaScalarFieldEnum[] | HistoriaClinicaScalarFieldEnum
    having?: HistoriaClinicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoriaClinicaCountAggregateInputType | true
    _avg?: HistoriaClinicaAvgAggregateInputType
    _sum?: HistoriaClinicaSumAggregateInputType
    _min?: HistoriaClinicaMinAggregateInputType
    _max?: HistoriaClinicaMaxAggregateInputType
  }

  export type HistoriaClinicaGroupByOutputType = {
    id: number
    pacienteId: number
    medicoId: number
    fecha: Date
    descripcion: string
    _count: HistoriaClinicaCountAggregateOutputType | null
    _avg: HistoriaClinicaAvgAggregateOutputType | null
    _sum: HistoriaClinicaSumAggregateOutputType | null
    _min: HistoriaClinicaMinAggregateOutputType | null
    _max: HistoriaClinicaMaxAggregateOutputType | null
  }

  type GetHistoriaClinicaGroupByPayload<T extends HistoriaClinicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoriaClinicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoriaClinicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoriaClinicaGroupByOutputType[P]>
            : GetScalarType<T[P], HistoriaClinicaGroupByOutputType[P]>
        }
      >
    >


  export type HistoriaClinicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    fecha?: boolean
    descripcion?: boolean
    paciente?: boolean | UsuarioDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiaClinica"]>



  export type HistoriaClinicaSelectScalar = {
    id?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    fecha?: boolean
    descripcion?: boolean
  }

  export type HistoriaClinicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteId" | "medicoId" | "fecha" | "descripcion", ExtArgs["result"]["historiaClinica"]>
  export type HistoriaClinicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | UsuarioDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }

  export type $HistoriaClinicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoriaClinica"
    objects: {
      paciente: Prisma.$UsuarioPayload<ExtArgs>
      medico: Prisma.$MedicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pacienteId: number
      medicoId: number
      fecha: Date
      descripcion: string
    }, ExtArgs["result"]["historiaClinica"]>
    composites: {}
  }

  type HistoriaClinicaGetPayload<S extends boolean | null | undefined | HistoriaClinicaDefaultArgs> = $Result.GetResult<Prisma.$HistoriaClinicaPayload, S>

  type HistoriaClinicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoriaClinicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoriaClinicaCountAggregateInputType | true
    }

  export interface HistoriaClinicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoriaClinica'], meta: { name: 'HistoriaClinica' } }
    /**
     * Find zero or one HistoriaClinica that matches the filter.
     * @param {HistoriaClinicaFindUniqueArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoriaClinicaFindUniqueArgs>(args: SelectSubset<T, HistoriaClinicaFindUniqueArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoriaClinica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoriaClinicaFindUniqueOrThrowArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoriaClinicaFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriaClinica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaFindFirstArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoriaClinicaFindFirstArgs>(args?: SelectSubset<T, HistoriaClinicaFindFirstArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriaClinica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaFindFirstOrThrowArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoriaClinicaFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoriaClinicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoriaClinicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoriaClinicas
     * const historiaClinicas = await prisma.historiaClinica.findMany()
     * 
     * // Get first 10 HistoriaClinicas
     * const historiaClinicas = await prisma.historiaClinica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historiaClinicaWithIdOnly = await prisma.historiaClinica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoriaClinicaFindManyArgs>(args?: SelectSubset<T, HistoriaClinicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoriaClinica.
     * @param {HistoriaClinicaCreateArgs} args - Arguments to create a HistoriaClinica.
     * @example
     * // Create one HistoriaClinica
     * const HistoriaClinica = await prisma.historiaClinica.create({
     *   data: {
     *     // ... data to create a HistoriaClinica
     *   }
     * })
     * 
     */
    create<T extends HistoriaClinicaCreateArgs>(args: SelectSubset<T, HistoriaClinicaCreateArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoriaClinicas.
     * @param {HistoriaClinicaCreateManyArgs} args - Arguments to create many HistoriaClinicas.
     * @example
     * // Create many HistoriaClinicas
     * const historiaClinica = await prisma.historiaClinica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoriaClinicaCreateManyArgs>(args?: SelectSubset<T, HistoriaClinicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HistoriaClinica.
     * @param {HistoriaClinicaDeleteArgs} args - Arguments to delete one HistoriaClinica.
     * @example
     * // Delete one HistoriaClinica
     * const HistoriaClinica = await prisma.historiaClinica.delete({
     *   where: {
     *     // ... filter to delete one HistoriaClinica
     *   }
     * })
     * 
     */
    delete<T extends HistoriaClinicaDeleteArgs>(args: SelectSubset<T, HistoriaClinicaDeleteArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoriaClinica.
     * @param {HistoriaClinicaUpdateArgs} args - Arguments to update one HistoriaClinica.
     * @example
     * // Update one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoriaClinicaUpdateArgs>(args: SelectSubset<T, HistoriaClinicaUpdateArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoriaClinicas.
     * @param {HistoriaClinicaDeleteManyArgs} args - Arguments to filter HistoriaClinicas to delete.
     * @example
     * // Delete a few HistoriaClinicas
     * const { count } = await prisma.historiaClinica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoriaClinicaDeleteManyArgs>(args?: SelectSubset<T, HistoriaClinicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoriaClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoriaClinicas
     * const historiaClinica = await prisma.historiaClinica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoriaClinicaUpdateManyArgs>(args: SelectSubset<T, HistoriaClinicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistoriaClinica.
     * @param {HistoriaClinicaUpsertArgs} args - Arguments to update or create a HistoriaClinica.
     * @example
     * // Update or create a HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.upsert({
     *   create: {
     *     // ... data to create a HistoriaClinica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoriaClinica we want to update
     *   }
     * })
     */
    upsert<T extends HistoriaClinicaUpsertArgs>(args: SelectSubset<T, HistoriaClinicaUpsertArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoriaClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaCountArgs} args - Arguments to filter HistoriaClinicas to count.
     * @example
     * // Count the number of HistoriaClinicas
     * const count = await prisma.historiaClinica.count({
     *   where: {
     *     // ... the filter for the HistoriaClinicas we want to count
     *   }
     * })
    **/
    count<T extends HistoriaClinicaCountArgs>(
      args?: Subset<T, HistoriaClinicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoriaClinicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoriaClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoriaClinicaAggregateArgs>(args: Subset<T, HistoriaClinicaAggregateArgs>): Prisma.PrismaPromise<GetHistoriaClinicaAggregateType<T>>

    /**
     * Group by HistoriaClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaGroupByArgs} args - Group by arguments.
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
      T extends HistoriaClinicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoriaClinicaGroupByArgs['orderBy'] }
        : { orderBy?: HistoriaClinicaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoriaClinicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoriaClinicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoriaClinica model
   */
  readonly fields: HistoriaClinicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoriaClinica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoriaClinicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoriaClinica model
   */
  interface HistoriaClinicaFieldRefs {
    readonly id: FieldRef<"HistoriaClinica", 'Int'>
    readonly pacienteId: FieldRef<"HistoriaClinica", 'Int'>
    readonly medicoId: FieldRef<"HistoriaClinica", 'Int'>
    readonly fecha: FieldRef<"HistoriaClinica", 'DateTime'>
    readonly descripcion: FieldRef<"HistoriaClinica", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoriaClinica findUnique
   */
  export type HistoriaClinicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica findUniqueOrThrow
   */
  export type HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica findFirst
   */
  export type HistoriaClinicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriaClinicas.
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriaClinicas.
     */
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * HistoriaClinica findFirstOrThrow
   */
  export type HistoriaClinicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriaClinicas.
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriaClinicas.
     */
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * HistoriaClinica findMany
   */
  export type HistoriaClinicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinicas to fetch.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoriaClinicas.
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * HistoriaClinica create
   */
  export type HistoriaClinicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoriaClinica.
     */
    data: XOR<HistoriaClinicaCreateInput, HistoriaClinicaUncheckedCreateInput>
  }

  /**
   * HistoriaClinica createMany
   */
  export type HistoriaClinicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoriaClinicas.
     */
    data: HistoriaClinicaCreateManyInput | HistoriaClinicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoriaClinica update
   */
  export type HistoriaClinicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoriaClinica.
     */
    data: XOR<HistoriaClinicaUpdateInput, HistoriaClinicaUncheckedUpdateInput>
    /**
     * Choose, which HistoriaClinica to update.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica updateMany
   */
  export type HistoriaClinicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoriaClinicas.
     */
    data: XOR<HistoriaClinicaUpdateManyMutationInput, HistoriaClinicaUncheckedUpdateManyInput>
    /**
     * Filter which HistoriaClinicas to update
     */
    where?: HistoriaClinicaWhereInput
    /**
     * Limit how many HistoriaClinicas to update.
     */
    limit?: number
  }

  /**
   * HistoriaClinica upsert
   */
  export type HistoriaClinicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoriaClinica to update in case it exists.
     */
    where: HistoriaClinicaWhereUniqueInput
    /**
     * In case the HistoriaClinica found by the `where` argument doesn't exist, create a new HistoriaClinica with this data.
     */
    create: XOR<HistoriaClinicaCreateInput, HistoriaClinicaUncheckedCreateInput>
    /**
     * In case the HistoriaClinica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoriaClinicaUpdateInput, HistoriaClinicaUncheckedUpdateInput>
  }

  /**
   * HistoriaClinica delete
   */
  export type HistoriaClinicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter which HistoriaClinica to delete.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica deleteMany
   */
  export type HistoriaClinicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriaClinicas to delete
     */
    where?: HistoriaClinicaWhereInput
    /**
     * Limit how many HistoriaClinicas to delete.
     */
    limit?: number
  }

  /**
   * HistoriaClinica without action
   */
  export type HistoriaClinicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
  }


  /**
   * Model Mensaje
   */

  export type AggregateMensaje = {
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  export type MensajeAvgAggregateOutputType = {
    id: number | null
    remitenteId: number | null
    destinatarioId: number | null
  }

  export type MensajeSumAggregateOutputType = {
    id: number | null
    remitenteId: number | null
    destinatarioId: number | null
  }

  export type MensajeMinAggregateOutputType = {
    id: number | null
    remitenteId: number | null
    destinatarioId: number | null
    fecha: Date | null
    mensaje: string | null
  }

  export type MensajeMaxAggregateOutputType = {
    id: number | null
    remitenteId: number | null
    destinatarioId: number | null
    fecha: Date | null
    mensaje: string | null
  }

  export type MensajeCountAggregateOutputType = {
    id: number
    remitenteId: number
    destinatarioId: number
    fecha: number
    mensaje: number
    _all: number
  }


  export type MensajeAvgAggregateInputType = {
    id?: true
    remitenteId?: true
    destinatarioId?: true
  }

  export type MensajeSumAggregateInputType = {
    id?: true
    remitenteId?: true
    destinatarioId?: true
  }

  export type MensajeMinAggregateInputType = {
    id?: true
    remitenteId?: true
    destinatarioId?: true
    fecha?: true
    mensaje?: true
  }

  export type MensajeMaxAggregateInputType = {
    id?: true
    remitenteId?: true
    destinatarioId?: true
    fecha?: true
    mensaje?: true
  }

  export type MensajeCountAggregateInputType = {
    id?: true
    remitenteId?: true
    destinatarioId?: true
    fecha?: true
    mensaje?: true
    _all?: true
  }

  export type MensajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensaje to aggregate.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensajes
    **/
    _count?: true | MensajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajeMaxAggregateInputType
  }

  export type GetMensajeAggregateType<T extends MensajeAggregateArgs> = {
        [P in keyof T & keyof AggregateMensaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensaje[P]>
      : GetScalarType<T[P], AggregateMensaje[P]>
  }




  export type MensajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
    orderBy?: MensajeOrderByWithAggregationInput | MensajeOrderByWithAggregationInput[]
    by: MensajeScalarFieldEnum[] | MensajeScalarFieldEnum
    having?: MensajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajeCountAggregateInputType | true
    _avg?: MensajeAvgAggregateInputType
    _sum?: MensajeSumAggregateInputType
    _min?: MensajeMinAggregateInputType
    _max?: MensajeMaxAggregateInputType
  }

  export type MensajeGroupByOutputType = {
    id: number
    remitenteId: number
    destinatarioId: number
    fecha: Date
    mensaje: string
    _count: MensajeCountAggregateOutputType | null
    _avg: MensajeAvgAggregateOutputType | null
    _sum: MensajeSumAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  type GetMensajeGroupByPayload<T extends MensajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajeGroupByOutputType[P]>
            : GetScalarType<T[P], MensajeGroupByOutputType[P]>
        }
      >
    >


  export type MensajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remitenteId?: boolean
    destinatarioId?: boolean
    fecha?: boolean
    mensaje?: boolean
    remitente?: boolean | UsuarioDefaultArgs<ExtArgs>
    destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>



  export type MensajeSelectScalar = {
    id?: boolean
    remitenteId?: boolean
    destinatarioId?: boolean
    fecha?: boolean
    mensaje?: boolean
  }

  export type MensajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "remitenteId" | "destinatarioId" | "fecha" | "mensaje", ExtArgs["result"]["mensaje"]>
  export type MensajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    remitente?: boolean | UsuarioDefaultArgs<ExtArgs>
    destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MensajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensaje"
    objects: {
      remitente: Prisma.$UsuarioPayload<ExtArgs>
      destinatario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      remitenteId: number
      destinatarioId: number
      fecha: Date
      mensaje: string
    }, ExtArgs["result"]["mensaje"]>
    composites: {}
  }

  type MensajeGetPayload<S extends boolean | null | undefined | MensajeDefaultArgs> = $Result.GetResult<Prisma.$MensajePayload, S>

  type MensajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajeCountAggregateInputType | true
    }

  export interface MensajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensaje'], meta: { name: 'Mensaje' } }
    /**
     * Find zero or one Mensaje that matches the filter.
     * @param {MensajeFindUniqueArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensajeFindUniqueArgs>(args: SelectSubset<T, MensajeFindUniqueArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensajeFindUniqueOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensajeFindUniqueOrThrowArgs>(args: SelectSubset<T, MensajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensajeFindFirstArgs>(args?: SelectSubset<T, MensajeFindFirstArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindFirstOrThrowArgs} args - Arguments to find a Mensaje
     * @example
     * // Get one Mensaje
     * const mensaje = await prisma.mensaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensajeFindFirstOrThrowArgs>(args?: SelectSubset<T, MensajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajes
     * const mensajes = await prisma.mensaje.findMany()
     * 
     * // Get first 10 Mensajes
     * const mensajes = await prisma.mensaje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensajeWithIdOnly = await prisma.mensaje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensajeFindManyArgs>(args?: SelectSubset<T, MensajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensaje.
     * @param {MensajeCreateArgs} args - Arguments to create a Mensaje.
     * @example
     * // Create one Mensaje
     * const Mensaje = await prisma.mensaje.create({
     *   data: {
     *     // ... data to create a Mensaje
     *   }
     * })
     * 
     */
    create<T extends MensajeCreateArgs>(args: SelectSubset<T, MensajeCreateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensajes.
     * @param {MensajeCreateManyArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensaje = await prisma.mensaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensajeCreateManyArgs>(args?: SelectSubset<T, MensajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mensaje.
     * @param {MensajeDeleteArgs} args - Arguments to delete one Mensaje.
     * @example
     * // Delete one Mensaje
     * const Mensaje = await prisma.mensaje.delete({
     *   where: {
     *     // ... filter to delete one Mensaje
     *   }
     * })
     * 
     */
    delete<T extends MensajeDeleteArgs>(args: SelectSubset<T, MensajeDeleteArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensaje.
     * @param {MensajeUpdateArgs} args - Arguments to update one Mensaje.
     * @example
     * // Update one Mensaje
     * const mensaje = await prisma.mensaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensajeUpdateArgs>(args: SelectSubset<T, MensajeUpdateArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensajes.
     * @param {MensajeDeleteManyArgs} args - Arguments to filter Mensajes to delete.
     * @example
     * // Delete a few Mensajes
     * const { count } = await prisma.mensaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensajeDeleteManyArgs>(args?: SelectSubset<T, MensajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajes
     * const mensaje = await prisma.mensaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensajeUpdateManyArgs>(args: SelectSubset<T, MensajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mensaje.
     * @param {MensajeUpsertArgs} args - Arguments to update or create a Mensaje.
     * @example
     * // Update or create a Mensaje
     * const mensaje = await prisma.mensaje.upsert({
     *   create: {
     *     // ... data to create a Mensaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensaje we want to update
     *   }
     * })
     */
    upsert<T extends MensajeUpsertArgs>(args: SelectSubset<T, MensajeUpsertArgs<ExtArgs>>): Prisma__MensajeClient<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeCountArgs} args - Arguments to filter Mensajes to count.
     * @example
     * // Count the number of Mensajes
     * const count = await prisma.mensaje.count({
     *   where: {
     *     // ... the filter for the Mensajes we want to count
     *   }
     * })
    **/
    count<T extends MensajeCountArgs>(
      args?: Subset<T, MensajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MensajeAggregateArgs>(args: Subset<T, MensajeAggregateArgs>): Prisma.PrismaPromise<GetMensajeAggregateType<T>>

    /**
     * Group by Mensaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeGroupByArgs} args - Group by arguments.
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
      T extends MensajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensajeGroupByArgs['orderBy'] }
        : { orderBy?: MensajeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MensajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensaje model
   */
  readonly fields: MensajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    remitente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destinatario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mensaje model
   */
  interface MensajeFieldRefs {
    readonly id: FieldRef<"Mensaje", 'Int'>
    readonly remitenteId: FieldRef<"Mensaje", 'Int'>
    readonly destinatarioId: FieldRef<"Mensaje", 'Int'>
    readonly fecha: FieldRef<"Mensaje", 'DateTime'>
    readonly mensaje: FieldRef<"Mensaje", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mensaje findUnique
   */
  export type MensajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findUniqueOrThrow
   */
  export type MensajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje findFirst
   */
  export type MensajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findFirstOrThrow
   */
  export type MensajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensaje to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensajes.
     */
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje findMany
   */
  export type MensajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter, which Mensajes to fetch.
     */
    where?: MensajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensajes to fetch.
     */
    orderBy?: MensajeOrderByWithRelationInput | MensajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensajes.
     */
    cursor?: MensajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensajes.
     */
    skip?: number
    distinct?: MensajeScalarFieldEnum | MensajeScalarFieldEnum[]
  }

  /**
   * Mensaje create
   */
  export type MensajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensaje.
     */
    data: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
  }

  /**
   * Mensaje createMany
   */
  export type MensajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensajes.
     */
    data: MensajeCreateManyInput | MensajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensaje update
   */
  export type MensajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensaje.
     */
    data: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
    /**
     * Choose, which Mensaje to update.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje updateMany
   */
  export type MensajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensajes.
     */
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyInput>
    /**
     * Filter which Mensajes to update
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to update.
     */
    limit?: number
  }

  /**
   * Mensaje upsert
   */
  export type MensajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensaje to update in case it exists.
     */
    where: MensajeWhereUniqueInput
    /**
     * In case the Mensaje found by the `where` argument doesn't exist, create a new Mensaje with this data.
     */
    create: XOR<MensajeCreateInput, MensajeUncheckedCreateInput>
    /**
     * In case the Mensaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensajeUpdateInput, MensajeUncheckedUpdateInput>
  }

  /**
   * Mensaje delete
   */
  export type MensajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
    /**
     * Filter which Mensaje to delete.
     */
    where: MensajeWhereUniqueInput
  }

  /**
   * Mensaje deleteMany
   */
  export type MensajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensajes to delete
     */
    where?: MensajeWhereInput
    /**
     * Limit how many Mensajes to delete.
     */
    limit?: number
  }

  /**
   * Mensaje without action
   */
  export type MensajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensaje
     */
    select?: MensajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensaje
     */
    omit?: MensajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensajeInclude<ExtArgs> | null
  }


  /**
   * Model Auditoria
   */

  export type AggregateAuditoria = {
    _count: AuditoriaCountAggregateOutputType | null
    _avg: AuditoriaAvgAggregateOutputType | null
    _sum: AuditoriaSumAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  export type AuditoriaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type AuditoriaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type AuditoriaMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    fecha: Date | null
    accion: string | null
  }

  export type AuditoriaMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    fecha: Date | null
    accion: string | null
  }

  export type AuditoriaCountAggregateOutputType = {
    id: number
    usuarioId: number
    fecha: number
    accion: number
    _all: number
  }


  export type AuditoriaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type AuditoriaSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type AuditoriaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    fecha?: true
    accion?: true
  }

  export type AuditoriaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    fecha?: true
    accion?: true
  }

  export type AuditoriaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    fecha?: true
    accion?: true
    _all?: true
  }

  export type AuditoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auditoria to aggregate.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auditorias
    **/
    _count?: true | AuditoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditoriaMaxAggregateInputType
  }

  export type GetAuditoriaAggregateType<T extends AuditoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditoria[P]>
      : GetScalarType<T[P], AggregateAuditoria[P]>
  }




  export type AuditoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditoriaWhereInput
    orderBy?: AuditoriaOrderByWithAggregationInput | AuditoriaOrderByWithAggregationInput[]
    by: AuditoriaScalarFieldEnum[] | AuditoriaScalarFieldEnum
    having?: AuditoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditoriaCountAggregateInputType | true
    _avg?: AuditoriaAvgAggregateInputType
    _sum?: AuditoriaSumAggregateInputType
    _min?: AuditoriaMinAggregateInputType
    _max?: AuditoriaMaxAggregateInputType
  }

  export type AuditoriaGroupByOutputType = {
    id: number
    usuarioId: number
    fecha: Date
    accion: string
    _count: AuditoriaCountAggregateOutputType | null
    _avg: AuditoriaAvgAggregateOutputType | null
    _sum: AuditoriaSumAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  type GetAuditoriaGroupByPayload<T extends AuditoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
            : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
        }
      >
    >


  export type AuditoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    fecha?: boolean
    accion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditoria"]>



  export type AuditoriaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    fecha?: boolean
    accion?: boolean
  }

  export type AuditoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "fecha" | "accion", ExtArgs["result"]["auditoria"]>
  export type AuditoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AuditoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auditoria"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      fecha: Date
      accion: string
    }, ExtArgs["result"]["auditoria"]>
    composites: {}
  }

  type AuditoriaGetPayload<S extends boolean | null | undefined | AuditoriaDefaultArgs> = $Result.GetResult<Prisma.$AuditoriaPayload, S>

  type AuditoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditoriaCountAggregateInputType | true
    }

  export interface AuditoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auditoria'], meta: { name: 'Auditoria' } }
    /**
     * Find zero or one Auditoria that matches the filter.
     * @param {AuditoriaFindUniqueArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditoriaFindUniqueArgs>(args: SelectSubset<T, AuditoriaFindUniqueArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auditoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditoriaFindUniqueOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindFirstArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditoriaFindFirstArgs>(args?: SelectSubset<T, AuditoriaFindFirstArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindFirstOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auditorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auditorias
     * const auditorias = await prisma.auditoria.findMany()
     * 
     * // Get first 10 Auditorias
     * const auditorias = await prisma.auditoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditoriaWithIdOnly = await prisma.auditoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditoriaFindManyArgs>(args?: SelectSubset<T, AuditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auditoria.
     * @param {AuditoriaCreateArgs} args - Arguments to create a Auditoria.
     * @example
     * // Create one Auditoria
     * const Auditoria = await prisma.auditoria.create({
     *   data: {
     *     // ... data to create a Auditoria
     *   }
     * })
     * 
     */
    create<T extends AuditoriaCreateArgs>(args: SelectSubset<T, AuditoriaCreateArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auditorias.
     * @param {AuditoriaCreateManyArgs} args - Arguments to create many Auditorias.
     * @example
     * // Create many Auditorias
     * const auditoria = await prisma.auditoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditoriaCreateManyArgs>(args?: SelectSubset<T, AuditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auditoria.
     * @param {AuditoriaDeleteArgs} args - Arguments to delete one Auditoria.
     * @example
     * // Delete one Auditoria
     * const Auditoria = await prisma.auditoria.delete({
     *   where: {
     *     // ... filter to delete one Auditoria
     *   }
     * })
     * 
     */
    delete<T extends AuditoriaDeleteArgs>(args: SelectSubset<T, AuditoriaDeleteArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auditoria.
     * @param {AuditoriaUpdateArgs} args - Arguments to update one Auditoria.
     * @example
     * // Update one Auditoria
     * const auditoria = await prisma.auditoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditoriaUpdateArgs>(args: SelectSubset<T, AuditoriaUpdateArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auditorias.
     * @param {AuditoriaDeleteManyArgs} args - Arguments to filter Auditorias to delete.
     * @example
     * // Delete a few Auditorias
     * const { count } = await prisma.auditoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditoriaDeleteManyArgs>(args?: SelectSubset<T, AuditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auditorias
     * const auditoria = await prisma.auditoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditoriaUpdateManyArgs>(args: SelectSubset<T, AuditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auditoria.
     * @param {AuditoriaUpsertArgs} args - Arguments to update or create a Auditoria.
     * @example
     * // Update or create a Auditoria
     * const auditoria = await prisma.auditoria.upsert({
     *   create: {
     *     // ... data to create a Auditoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auditoria we want to update
     *   }
     * })
     */
    upsert<T extends AuditoriaUpsertArgs>(args: SelectSubset<T, AuditoriaUpsertArgs<ExtArgs>>): Prisma__AuditoriaClient<$Result.GetResult<Prisma.$AuditoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaCountArgs} args - Arguments to filter Auditorias to count.
     * @example
     * // Count the number of Auditorias
     * const count = await prisma.auditoria.count({
     *   where: {
     *     // ... the filter for the Auditorias we want to count
     *   }
     * })
    **/
    count<T extends AuditoriaCountArgs>(
      args?: Subset<T, AuditoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditoriaAggregateArgs>(args: Subset<T, AuditoriaAggregateArgs>): Prisma.PrismaPromise<GetAuditoriaAggregateType<T>>

    /**
     * Group by Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaGroupByArgs} args - Group by arguments.
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
      T extends AuditoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditoriaGroupByArgs['orderBy'] }
        : { orderBy?: AuditoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auditoria model
   */
  readonly fields: AuditoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auditoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Auditoria model
   */
  interface AuditoriaFieldRefs {
    readonly id: FieldRef<"Auditoria", 'Int'>
    readonly usuarioId: FieldRef<"Auditoria", 'Int'>
    readonly fecha: FieldRef<"Auditoria", 'DateTime'>
    readonly accion: FieldRef<"Auditoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Auditoria findUnique
   */
  export type AuditoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria findUniqueOrThrow
   */
  export type AuditoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria findFirst
   */
  export type AuditoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria findFirstOrThrow
   */
  export type AuditoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditoria to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria findMany
   */
  export type AuditoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which Auditorias to fetch.
     */
    where?: AuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auditorias to fetch.
     */
    orderBy?: AuditoriaOrderByWithRelationInput | AuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auditorias.
     */
    cursor?: AuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auditorias.
     */
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * Auditoria create
   */
  export type AuditoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Auditoria.
     */
    data: XOR<AuditoriaCreateInput, AuditoriaUncheckedCreateInput>
  }

  /**
   * Auditoria createMany
   */
  export type AuditoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auditorias.
     */
    data: AuditoriaCreateManyInput | AuditoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auditoria update
   */
  export type AuditoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Auditoria.
     */
    data: XOR<AuditoriaUpdateInput, AuditoriaUncheckedUpdateInput>
    /**
     * Choose, which Auditoria to update.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria updateMany
   */
  export type AuditoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auditorias.
     */
    data: XOR<AuditoriaUpdateManyMutationInput, AuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which Auditorias to update
     */
    where?: AuditoriaWhereInput
    /**
     * Limit how many Auditorias to update.
     */
    limit?: number
  }

  /**
   * Auditoria upsert
   */
  export type AuditoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Auditoria to update in case it exists.
     */
    where: AuditoriaWhereUniqueInput
    /**
     * In case the Auditoria found by the `where` argument doesn't exist, create a new Auditoria with this data.
     */
    create: XOR<AuditoriaCreateInput, AuditoriaUncheckedCreateInput>
    /**
     * In case the Auditoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditoriaUpdateInput, AuditoriaUncheckedUpdateInput>
  }

  /**
   * Auditoria delete
   */
  export type AuditoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
    /**
     * Filter which Auditoria to delete.
     */
    where: AuditoriaWhereUniqueInput
  }

  /**
   * Auditoria deleteMany
   */
  export type AuditoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auditorias to delete
     */
    where?: AuditoriaWhereInput
    /**
     * Limit how many Auditorias to delete.
     */
    limit?: number
  }

  /**
   * Auditoria without action
   */
  export type AuditoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auditoria
     */
    select?: AuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auditoria
     */
    omit?: AuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditoriaInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    contraseña: 'contraseña',
    rol: 'rol'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EspecialidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type EspecialidadScalarFieldEnum = (typeof EspecialidadScalarFieldEnum)[keyof typeof EspecialidadScalarFieldEnum]


  export const MedicoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    especialidadId: 'especialidadId'
  };

  export type MedicoScalarFieldEnum = (typeof MedicoScalarFieldEnum)[keyof typeof MedicoScalarFieldEnum]


  export const CitaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    hora: 'hora',
    pacienteId: 'pacienteId',
    medicoId: 'medicoId'
  };

  export type CitaScalarFieldEnum = (typeof CitaScalarFieldEnum)[keyof typeof CitaScalarFieldEnum]


  export const HistoriaClinicaScalarFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    medicoId: 'medicoId',
    fecha: 'fecha',
    descripcion: 'descripcion'
  };

  export type HistoriaClinicaScalarFieldEnum = (typeof HistoriaClinicaScalarFieldEnum)[keyof typeof HistoriaClinicaScalarFieldEnum]


  export const MensajeScalarFieldEnum: {
    id: 'id',
    remitenteId: 'remitenteId',
    destinatarioId: 'destinatarioId',
    fecha: 'fecha',
    mensaje: 'mensaje'
  };

  export type MensajeScalarFieldEnum = (typeof MensajeScalarFieldEnum)[keyof typeof MensajeScalarFieldEnum]


  export const AuditoriaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    fecha: 'fecha',
    accion: 'accion'
  };

  export type AuditoriaScalarFieldEnum = (typeof AuditoriaScalarFieldEnum)[keyof typeof AuditoriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    email: 'email',
    contraseña: 'contraseña',
    rol: 'rol'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const EspecialidadOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type EspecialidadOrderByRelevanceFieldEnum = (typeof EspecialidadOrderByRelevanceFieldEnum)[keyof typeof EspecialidadOrderByRelevanceFieldEnum]


  export const HistoriaClinicaOrderByRelevanceFieldEnum: {
    descripcion: 'descripcion'
  };

  export type HistoriaClinicaOrderByRelevanceFieldEnum = (typeof HistoriaClinicaOrderByRelevanceFieldEnum)[keyof typeof HistoriaClinicaOrderByRelevanceFieldEnum]


  export const MensajeOrderByRelevanceFieldEnum: {
    mensaje: 'mensaje'
  };

  export type MensajeOrderByRelevanceFieldEnum = (typeof MensajeOrderByRelevanceFieldEnum)[keyof typeof MensajeOrderByRelevanceFieldEnum]


  export const AuditoriaOrderByRelevanceFieldEnum: {
    accion: 'accion'
  };

  export type AuditoriaOrderByRelevanceFieldEnum = (typeof AuditoriaOrderByRelevanceFieldEnum)[keyof typeof AuditoriaOrderByRelevanceFieldEnum]


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    medico?: XOR<MedicoNullableScalarRelationFilter, MedicoWhereInput> | null
    citas?: CitaListRelationFilter
    historias?: HistoriaClinicaListRelationFilter
    mensajesEnviados?: MensajeListRelationFilter
    mensajesRecibidos?: MensajeListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    medico?: MedicoOrderByWithRelationInput
    citas?: CitaOrderByRelationAggregateInput
    historias?: HistoriaClinicaOrderByRelationAggregateInput
    mensajesEnviados?: MensajeOrderByRelationAggregateInput
    mensajesRecibidos?: MensajeOrderByRelationAggregateInput
    auditorias?: AuditoriaOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    medico?: XOR<MedicoNullableScalarRelationFilter, MedicoWhereInput> | null
    citas?: CitaListRelationFilter
    historias?: HistoriaClinicaListRelationFilter
    mensajesEnviados?: MensajeListRelationFilter
    mensajesRecibidos?: MensajeListRelationFilter
    auditorias?: AuditoriaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    contraseña?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type EspecialidadWhereInput = {
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    id?: IntFilter<"Especialidad"> | number
    nombre?: StringFilter<"Especialidad"> | string
    medicos?: MedicoListRelationFilter
  }

  export type EspecialidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    medicos?: MedicoOrderByRelationAggregateInput
    _relevance?: EspecialidadOrderByRelevanceInput
  }

  export type EspecialidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    nombre?: StringFilter<"Especialidad"> | string
    medicos?: MedicoListRelationFilter
  }, "id">

  export type EspecialidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: EspecialidadCountOrderByAggregateInput
    _avg?: EspecialidadAvgOrderByAggregateInput
    _max?: EspecialidadMaxOrderByAggregateInput
    _min?: EspecialidadMinOrderByAggregateInput
    _sum?: EspecialidadSumOrderByAggregateInput
  }

  export type EspecialidadScalarWhereWithAggregatesInput = {
    AND?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    OR?: EspecialidadScalarWhereWithAggregatesInput[]
    NOT?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Especialidad"> | number
    nombre?: StringWithAggregatesFilter<"Especialidad"> | string
  }

  export type MedicoWhereInput = {
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    id?: IntFilter<"Medico"> | number
    usuarioId?: IntFilter<"Medico"> | number
    especialidadId?: IntFilter<"Medico"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    especialidad?: XOR<EspecialidadScalarRelationFilter, EspecialidadWhereInput>
    citas?: CitaListRelationFilter
    historias?: HistoriaClinicaListRelationFilter
  }

  export type MedicoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    especialidad?: EspecialidadOrderByWithRelationInput
    citas?: CitaOrderByRelationAggregateInput
    historias?: HistoriaClinicaOrderByRelationAggregateInput
  }

  export type MedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId?: number
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    especialidadId?: IntFilter<"Medico"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    especialidad?: XOR<EspecialidadScalarRelationFilter, EspecialidadWhereInput>
    citas?: CitaListRelationFilter
    historias?: HistoriaClinicaListRelationFilter
  }, "id" | "usuarioId">

  export type MedicoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    _count?: MedicoCountOrderByAggregateInput
    _avg?: MedicoAvgOrderByAggregateInput
    _max?: MedicoMaxOrderByAggregateInput
    _min?: MedicoMinOrderByAggregateInput
    _sum?: MedicoSumOrderByAggregateInput
  }

  export type MedicoScalarWhereWithAggregatesInput = {
    AND?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    OR?: MedicoScalarWhereWithAggregatesInput[]
    NOT?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medico"> | number
    usuarioId?: IntWithAggregatesFilter<"Medico"> | number
    especialidadId?: IntWithAggregatesFilter<"Medico"> | number
  }

  export type CitaWhereInput = {
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    id?: IntFilter<"Cita"> | number
    fecha?: DateTimeFilter<"Cita"> | Date | string
    hora?: DateTimeFilter<"Cita"> | Date | string
    pacienteId?: IntFilter<"Cita"> | number
    medicoId?: IntFilter<"Cita"> | number
    paciente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }

  export type CitaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    paciente?: UsuarioOrderByWithRelationInput
    medico?: MedicoOrderByWithRelationInput
  }

  export type CitaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    fecha?: DateTimeFilter<"Cita"> | Date | string
    hora?: DateTimeFilter<"Cita"> | Date | string
    pacienteId?: IntFilter<"Cita"> | number
    medicoId?: IntFilter<"Cita"> | number
    paciente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }, "id">

  export type CitaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    _count?: CitaCountOrderByAggregateInput
    _avg?: CitaAvgOrderByAggregateInput
    _max?: CitaMaxOrderByAggregateInput
    _min?: CitaMinOrderByAggregateInput
    _sum?: CitaSumOrderByAggregateInput
  }

  export type CitaScalarWhereWithAggregatesInput = {
    AND?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    OR?: CitaScalarWhereWithAggregatesInput[]
    NOT?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cita"> | number
    fecha?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    hora?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    pacienteId?: IntWithAggregatesFilter<"Cita"> | number
    medicoId?: IntWithAggregatesFilter<"Cita"> | number
  }

  export type HistoriaClinicaWhereInput = {
    AND?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    OR?: HistoriaClinicaWhereInput[]
    NOT?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    id?: IntFilter<"HistoriaClinica"> | number
    pacienteId?: IntFilter<"HistoriaClinica"> | number
    medicoId?: IntFilter<"HistoriaClinica"> | number
    fecha?: DateTimeFilter<"HistoriaClinica"> | Date | string
    descripcion?: StringFilter<"HistoriaClinica"> | string
    paciente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }

  export type HistoriaClinicaOrderByWithRelationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
    paciente?: UsuarioOrderByWithRelationInput
    medico?: MedicoOrderByWithRelationInput
    _relevance?: HistoriaClinicaOrderByRelevanceInput
  }

  export type HistoriaClinicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    OR?: HistoriaClinicaWhereInput[]
    NOT?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    pacienteId?: IntFilter<"HistoriaClinica"> | number
    medicoId?: IntFilter<"HistoriaClinica"> | number
    fecha?: DateTimeFilter<"HistoriaClinica"> | Date | string
    descripcion?: StringFilter<"HistoriaClinica"> | string
    paciente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }, "id">

  export type HistoriaClinicaOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
    _count?: HistoriaClinicaCountOrderByAggregateInput
    _avg?: HistoriaClinicaAvgOrderByAggregateInput
    _max?: HistoriaClinicaMaxOrderByAggregateInput
    _min?: HistoriaClinicaMinOrderByAggregateInput
    _sum?: HistoriaClinicaSumOrderByAggregateInput
  }

  export type HistoriaClinicaScalarWhereWithAggregatesInput = {
    AND?: HistoriaClinicaScalarWhereWithAggregatesInput | HistoriaClinicaScalarWhereWithAggregatesInput[]
    OR?: HistoriaClinicaScalarWhereWithAggregatesInput[]
    NOT?: HistoriaClinicaScalarWhereWithAggregatesInput | HistoriaClinicaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistoriaClinica"> | number
    pacienteId?: IntWithAggregatesFilter<"HistoriaClinica"> | number
    medicoId?: IntWithAggregatesFilter<"HistoriaClinica"> | number
    fecha?: DateTimeWithAggregatesFilter<"HistoriaClinica"> | Date | string
    descripcion?: StringWithAggregatesFilter<"HistoriaClinica"> | string
  }

  export type MensajeWhereInput = {
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    id?: IntFilter<"Mensaje"> | number
    remitenteId?: IntFilter<"Mensaje"> | number
    destinatarioId?: IntFilter<"Mensaje"> | number
    fecha?: DateTimeFilter<"Mensaje"> | Date | string
    mensaje?: StringFilter<"Mensaje"> | string
    remitente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    destinatario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type MensajeOrderByWithRelationInput = {
    id?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
    fecha?: SortOrder
    mensaje?: SortOrder
    remitente?: UsuarioOrderByWithRelationInput
    destinatario?: UsuarioOrderByWithRelationInput
    _relevance?: MensajeOrderByRelevanceInput
  }

  export type MensajeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    remitenteId?: IntFilter<"Mensaje"> | number
    destinatarioId?: IntFilter<"Mensaje"> | number
    fecha?: DateTimeFilter<"Mensaje"> | Date | string
    mensaje?: StringFilter<"Mensaje"> | string
    remitente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    destinatario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type MensajeOrderByWithAggregationInput = {
    id?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
    fecha?: SortOrder
    mensaje?: SortOrder
    _count?: MensajeCountOrderByAggregateInput
    _avg?: MensajeAvgOrderByAggregateInput
    _max?: MensajeMaxOrderByAggregateInput
    _min?: MensajeMinOrderByAggregateInput
    _sum?: MensajeSumOrderByAggregateInput
  }

  export type MensajeScalarWhereWithAggregatesInput = {
    AND?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    OR?: MensajeScalarWhereWithAggregatesInput[]
    NOT?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mensaje"> | number
    remitenteId?: IntWithAggregatesFilter<"Mensaje"> | number
    destinatarioId?: IntWithAggregatesFilter<"Mensaje"> | number
    fecha?: DateTimeWithAggregatesFilter<"Mensaje"> | Date | string
    mensaje?: StringWithAggregatesFilter<"Mensaje"> | string
  }

  export type AuditoriaWhereInput = {
    AND?: AuditoriaWhereInput | AuditoriaWhereInput[]
    OR?: AuditoriaWhereInput[]
    NOT?: AuditoriaWhereInput | AuditoriaWhereInput[]
    id?: IntFilter<"Auditoria"> | number
    usuarioId?: IntFilter<"Auditoria"> | number
    fecha?: DateTimeFilter<"Auditoria"> | Date | string
    accion?: StringFilter<"Auditoria"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AuditoriaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: AuditoriaOrderByRelevanceInput
  }

  export type AuditoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditoriaWhereInput | AuditoriaWhereInput[]
    OR?: AuditoriaWhereInput[]
    NOT?: AuditoriaWhereInput | AuditoriaWhereInput[]
    usuarioId?: IntFilter<"Auditoria"> | number
    fecha?: DateTimeFilter<"Auditoria"> | Date | string
    accion?: StringFilter<"Auditoria"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type AuditoriaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
    _count?: AuditoriaCountOrderByAggregateInput
    _avg?: AuditoriaAvgOrderByAggregateInput
    _max?: AuditoriaMaxOrderByAggregateInput
    _min?: AuditoriaMinOrderByAggregateInput
    _sum?: AuditoriaSumOrderByAggregateInput
  }

  export type AuditoriaScalarWhereWithAggregatesInput = {
    AND?: AuditoriaScalarWhereWithAggregatesInput | AuditoriaScalarWhereWithAggregatesInput[]
    OR?: AuditoriaScalarWhereWithAggregatesInput[]
    NOT?: AuditoriaScalarWhereWithAggregatesInput | AuditoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Auditoria"> | number
    usuarioId?: IntWithAggregatesFilter<"Auditoria"> | number
    fecha?: DateTimeWithAggregatesFilter<"Auditoria"> | Date | string
    accion?: StringWithAggregatesFilter<"Auditoria"> | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    rol: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadCreateInput = {
    nombre: string
    medicos?: MedicoCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUncheckedCreateInput = {
    id?: number
    nombre: string
    medicos?: MedicoUncheckedCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    medicos?: MedicoUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    medicos?: MedicoUncheckedUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadCreateManyInput = {
    id?: number
    nombre: string
  }

  export type EspecialidadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MedicoCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    citas?: CitaCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    especialidadId: number
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    citas?: CitaUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoCreateManyInput = {
    id?: number
    usuarioId: number
    especialidadId: number
  }

  export type MedicoUpdateManyMutationInput = {

  }

  export type MedicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaCreateInput = {
    fecha: Date | string
    hora: Date | string
    paciente: UsuarioCreateNestedOneWithoutCitasInput
    medico: MedicoCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    pacienteId: number
    medicoId: number
  }

  export type CitaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: UsuarioUpdateOneRequiredWithoutCitasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaCreateManyInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    pacienteId: number
    medicoId: number
  }

  export type CitaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriaClinicaCreateInput = {
    fecha: Date | string
    descripcion: string
    paciente: UsuarioCreateNestedOneWithoutHistoriasInput
    medico: MedicoCreateNestedOneWithoutHistoriasInput
  }

  export type HistoriaClinicaUncheckedCreateInput = {
    id?: number
    pacienteId: number
    medicoId: number
    fecha: Date | string
    descripcion: string
  }

  export type HistoriaClinicaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
    paciente?: UsuarioUpdateOneRequiredWithoutHistoriasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutHistoriasNestedInput
  }

  export type HistoriaClinicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type HistoriaClinicaCreateManyInput = {
    id?: number
    pacienteId: number
    medicoId: number
    fecha: Date | string
    descripcion: string
  }

  export type HistoriaClinicaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type HistoriaClinicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeCreateInput = {
    fecha: Date | string
    mensaje: string
    remitente: UsuarioCreateNestedOneWithoutMensajesEnviadosInput
    destinatario: UsuarioCreateNestedOneWithoutMensajesRecibidosInput
  }

  export type MensajeUncheckedCreateInput = {
    id?: number
    remitenteId: number
    destinatarioId: number
    fecha: Date | string
    mensaje: string
  }

  export type MensajeUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mensaje?: StringFieldUpdateOperationsInput | string
    remitente?: UsuarioUpdateOneRequiredWithoutMensajesEnviadosNestedInput
    destinatario?: UsuarioUpdateOneRequiredWithoutMensajesRecibidosNestedInput
  }

  export type MensajeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    remitenteId?: IntFieldUpdateOperationsInput | number
    destinatarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mensaje?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeCreateManyInput = {
    id?: number
    remitenteId: number
    destinatarioId: number
    fecha: Date | string
    mensaje: string
  }

  export type MensajeUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mensaje?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    remitenteId?: IntFieldUpdateOperationsInput | number
    destinatarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mensaje?: StringFieldUpdateOperationsInput | string
  }

  export type AuditoriaCreateInput = {
    fecha: Date | string
    accion: string
    usuario: UsuarioCreateNestedOneWithoutAuditoriasInput
  }

  export type AuditoriaUncheckedCreateInput = {
    id?: number
    usuarioId: number
    fecha: Date | string
    accion: string
  }

  export type AuditoriaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutAuditoriasNestedInput
  }

  export type AuditoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
  }

  export type AuditoriaCreateManyInput = {
    id?: number
    usuarioId: number
    fecha: Date | string
    accion: string
  }

  export type AuditoriaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
  }

  export type AuditoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MedicoNullableScalarRelationFilter = {
    is?: MedicoWhereInput | null
    isNot?: MedicoWhereInput | null
  }

  export type CitaListRelationFilter = {
    every?: CitaWhereInput
    some?: CitaWhereInput
    none?: CitaWhereInput
  }

  export type HistoriaClinicaListRelationFilter = {
    every?: HistoriaClinicaWhereInput
    some?: HistoriaClinicaWhereInput
    none?: HistoriaClinicaWhereInput
  }

  export type MensajeListRelationFilter = {
    every?: MensajeWhereInput
    some?: MensajeWhereInput
    none?: MensajeWhereInput
  }

  export type AuditoriaListRelationFilter = {
    every?: AuditoriaWhereInput
    some?: AuditoriaWhereInput
    none?: AuditoriaWhereInput
  }

  export type CitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoriaClinicaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MensajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type MedicoListRelationFilter = {
    every?: MedicoWhereInput
    some?: MedicoWhereInput
    none?: MedicoWhereInput
  }

  export type MedicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecialidadOrderByRelevanceInput = {
    fields: EspecialidadOrderByRelevanceFieldEnum | EspecialidadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EspecialidadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EspecialidadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EspecialidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EspecialidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EspecialidadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EspecialidadScalarRelationFilter = {
    is?: EspecialidadWhereInput
    isNot?: EspecialidadWhereInput
  }

  export type MedicoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
  }

  export type MedicoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
  }

  export type MedicoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
  }

  export type MedicoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
  }

  export type MedicoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
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

  export type MedicoScalarRelationFilter = {
    is?: MedicoWhereInput
    isNot?: MedicoWhereInput
  }

  export type CitaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type CitaAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type CitaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type CitaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type CitaSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
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

  export type HistoriaClinicaOrderByRelevanceInput = {
    fields: HistoriaClinicaOrderByRelevanceFieldEnum | HistoriaClinicaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HistoriaClinicaCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
  }

  export type HistoriaClinicaAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type HistoriaClinicaMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
  }

  export type HistoriaClinicaMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
  }

  export type HistoriaClinicaSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
  }

  export type MensajeOrderByRelevanceInput = {
    fields: MensajeOrderByRelevanceFieldEnum | MensajeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MensajeCountOrderByAggregateInput = {
    id?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
    fecha?: SortOrder
    mensaje?: SortOrder
  }

  export type MensajeAvgOrderByAggregateInput = {
    id?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
  }

  export type MensajeMaxOrderByAggregateInput = {
    id?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
    fecha?: SortOrder
    mensaje?: SortOrder
  }

  export type MensajeMinOrderByAggregateInput = {
    id?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
    fecha?: SortOrder
    mensaje?: SortOrder
  }

  export type MensajeSumOrderByAggregateInput = {
    id?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
  }

  export type AuditoriaOrderByRelevanceInput = {
    fields: AuditoriaOrderByRelevanceFieldEnum | AuditoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuditoriaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
  }

  export type AuditoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type AuditoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
  }

  export type AuditoriaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
  }

  export type AuditoriaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type MedicoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUsuarioInput
    connect?: MedicoWhereUniqueInput
  }

  export type CitaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type HistoriaClinicaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput> | HistoriaClinicaCreateWithoutPacienteInput[] | HistoriaClinicaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput | HistoriaClinicaCreateOrConnectWithoutPacienteInput[]
    createMany?: HistoriaClinicaCreateManyPacienteInputEnvelope
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
  }

  export type MensajeCreateNestedManyWithoutRemitenteInput = {
    create?: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput> | MensajeCreateWithoutRemitenteInput[] | MensajeUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutRemitenteInput | MensajeCreateOrConnectWithoutRemitenteInput[]
    createMany?: MensajeCreateManyRemitenteInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type MensajeCreateNestedManyWithoutDestinatarioInput = {
    create?: XOR<MensajeCreateWithoutDestinatarioInput, MensajeUncheckedCreateWithoutDestinatarioInput> | MensajeCreateWithoutDestinatarioInput[] | MensajeUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutDestinatarioInput | MensajeCreateOrConnectWithoutDestinatarioInput[]
    createMany?: MensajeCreateManyDestinatarioInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type AuditoriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
  }

  export type MedicoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUsuarioInput
    connect?: MedicoWhereUniqueInput
  }

  export type CitaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput> | HistoriaClinicaCreateWithoutPacienteInput[] | HistoriaClinicaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput | HistoriaClinicaCreateOrConnectWithoutPacienteInput[]
    createMany?: HistoriaClinicaCreateManyPacienteInputEnvelope
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutRemitenteInput = {
    create?: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput> | MensajeCreateWithoutRemitenteInput[] | MensajeUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutRemitenteInput | MensajeCreateOrConnectWithoutRemitenteInput[]
    createMany?: MensajeCreateManyRemitenteInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutDestinatarioInput = {
    create?: XOR<MensajeCreateWithoutDestinatarioInput, MensajeUncheckedCreateWithoutDestinatarioInput> | MensajeCreateWithoutDestinatarioInput[] | MensajeUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutDestinatarioInput | MensajeCreateOrConnectWithoutDestinatarioInput[]
    createMany?: MensajeCreateManyDestinatarioInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MedicoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUsuarioInput
    upsert?: MedicoUpsertWithoutUsuarioInput
    disconnect?: MedicoWhereInput | boolean
    delete?: MedicoWhereInput | boolean
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutUsuarioInput, MedicoUpdateWithoutUsuarioInput>, MedicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CitaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutPacienteInput | CitaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutPacienteInput | CitaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutPacienteInput | CitaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type HistoriaClinicaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput> | HistoriaClinicaCreateWithoutPacienteInput[] | HistoriaClinicaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput | HistoriaClinicaCreateOrConnectWithoutPacienteInput[]
    upsert?: HistoriaClinicaUpsertWithWhereUniqueWithoutPacienteInput | HistoriaClinicaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: HistoriaClinicaCreateManyPacienteInputEnvelope
    set?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    disconnect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    delete?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    update?: HistoriaClinicaUpdateWithWhereUniqueWithoutPacienteInput | HistoriaClinicaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: HistoriaClinicaUpdateManyWithWhereWithoutPacienteInput | HistoriaClinicaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
  }

  export type MensajeUpdateManyWithoutRemitenteNestedInput = {
    create?: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput> | MensajeCreateWithoutRemitenteInput[] | MensajeUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutRemitenteInput | MensajeCreateOrConnectWithoutRemitenteInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutRemitenteInput | MensajeUpsertWithWhereUniqueWithoutRemitenteInput[]
    createMany?: MensajeCreateManyRemitenteInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutRemitenteInput | MensajeUpdateWithWhereUniqueWithoutRemitenteInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutRemitenteInput | MensajeUpdateManyWithWhereWithoutRemitenteInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type MensajeUpdateManyWithoutDestinatarioNestedInput = {
    create?: XOR<MensajeCreateWithoutDestinatarioInput, MensajeUncheckedCreateWithoutDestinatarioInput> | MensajeCreateWithoutDestinatarioInput[] | MensajeUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutDestinatarioInput | MensajeCreateOrConnectWithoutDestinatarioInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutDestinatarioInput | MensajeUpsertWithWhereUniqueWithoutDestinatarioInput[]
    createMany?: MensajeCreateManyDestinatarioInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutDestinatarioInput | MensajeUpdateWithWhereUniqueWithoutDestinatarioInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutDestinatarioInput | MensajeUpdateManyWithWhereWithoutDestinatarioInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type AuditoriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput | AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    set?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    disconnect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    delete?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    update?: AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput | AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AuditoriaUpdateManyWithWhereWithoutUsuarioInput | AuditoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MedicoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUsuarioInput
    upsert?: MedicoUpsertWithoutUsuarioInput
    disconnect?: MedicoWhereInput | boolean
    delete?: MedicoWhereInput | boolean
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutUsuarioInput, MedicoUpdateWithoutUsuarioInput>, MedicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CitaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutPacienteInput | CitaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutPacienteInput | CitaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutPacienteInput | CitaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput> | HistoriaClinicaCreateWithoutPacienteInput[] | HistoriaClinicaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput | HistoriaClinicaCreateOrConnectWithoutPacienteInput[]
    upsert?: HistoriaClinicaUpsertWithWhereUniqueWithoutPacienteInput | HistoriaClinicaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: HistoriaClinicaCreateManyPacienteInputEnvelope
    set?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    disconnect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    delete?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    update?: HistoriaClinicaUpdateWithWhereUniqueWithoutPacienteInput | HistoriaClinicaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: HistoriaClinicaUpdateManyWithWhereWithoutPacienteInput | HistoriaClinicaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutRemitenteNestedInput = {
    create?: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput> | MensajeCreateWithoutRemitenteInput[] | MensajeUncheckedCreateWithoutRemitenteInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutRemitenteInput | MensajeCreateOrConnectWithoutRemitenteInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutRemitenteInput | MensajeUpsertWithWhereUniqueWithoutRemitenteInput[]
    createMany?: MensajeCreateManyRemitenteInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutRemitenteInput | MensajeUpdateWithWhereUniqueWithoutRemitenteInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutRemitenteInput | MensajeUpdateManyWithWhereWithoutRemitenteInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput = {
    create?: XOR<MensajeCreateWithoutDestinatarioInput, MensajeUncheckedCreateWithoutDestinatarioInput> | MensajeCreateWithoutDestinatarioInput[] | MensajeUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutDestinatarioInput | MensajeCreateOrConnectWithoutDestinatarioInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutDestinatarioInput | MensajeUpsertWithWhereUniqueWithoutDestinatarioInput[]
    createMany?: MensajeCreateManyDestinatarioInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutDestinatarioInput | MensajeUpdateWithWhereUniqueWithoutDestinatarioInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutDestinatarioInput | MensajeUpdateManyWithWhereWithoutDestinatarioInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput> | AuditoriaCreateWithoutUsuarioInput[] | AuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditoriaCreateOrConnectWithoutUsuarioInput | AuditoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput | AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AuditoriaCreateManyUsuarioInputEnvelope
    set?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    disconnect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    delete?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    connect?: AuditoriaWhereUniqueInput | AuditoriaWhereUniqueInput[]
    update?: AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput | AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AuditoriaUpdateManyWithWhereWithoutUsuarioInput | AuditoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
  }

  export type MedicoCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
  }

  export type MedicoUncheckedCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
  }

  export type MedicoUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    upsert?: MedicoUpsertWithWhereUniqueWithoutEspecialidadInput | MedicoUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    set?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    disconnect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    delete?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    update?: MedicoUpdateWithWhereUniqueWithoutEspecialidadInput | MedicoUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: MedicoUpdateManyWithWhereWithoutEspecialidadInput | MedicoUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
  }

  export type MedicoUncheckedUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    upsert?: MedicoUpsertWithWhereUniqueWithoutEspecialidadInput | MedicoUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    set?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    disconnect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    delete?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    update?: MedicoUpdateWithWhereUniqueWithoutEspecialidadInput | MedicoUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: MedicoUpdateManyWithWhereWithoutEspecialidadInput | MedicoUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutMedicoInput = {
    create?: XOR<UsuarioCreateWithoutMedicoInput, UsuarioUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMedicoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EspecialidadCreateNestedOneWithoutMedicosInput = {
    create?: XOR<EspecialidadCreateWithoutMedicosInput, EspecialidadUncheckedCreateWithoutMedicosInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutMedicosInput
    connect?: EspecialidadWhereUniqueInput
  }

  export type CitaCreateNestedManyWithoutMedicoInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type HistoriaClinicaCreateNestedManyWithoutMedicoInput = {
    create?: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput> | HistoriaClinicaCreateWithoutMedicoInput[] | HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutMedicoInput | HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    createMany?: HistoriaClinicaCreateManyMedicoInputEnvelope
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput> | HistoriaClinicaCreateWithoutMedicoInput[] | HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutMedicoInput | HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    createMany?: HistoriaClinicaCreateManyMedicoInputEnvelope
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutMedicoNestedInput = {
    create?: XOR<UsuarioCreateWithoutMedicoInput, UsuarioUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMedicoInput
    upsert?: UsuarioUpsertWithoutMedicoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMedicoInput, UsuarioUpdateWithoutMedicoInput>, UsuarioUncheckedUpdateWithoutMedicoInput>
  }

  export type EspecialidadUpdateOneRequiredWithoutMedicosNestedInput = {
    create?: XOR<EspecialidadCreateWithoutMedicosInput, EspecialidadUncheckedCreateWithoutMedicosInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutMedicosInput
    upsert?: EspecialidadUpsertWithoutMedicosInput
    connect?: EspecialidadWhereUniqueInput
    update?: XOR<XOR<EspecialidadUpdateToOneWithWhereWithoutMedicosInput, EspecialidadUpdateWithoutMedicosInput>, EspecialidadUncheckedUpdateWithoutMedicosInput>
  }

  export type CitaUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutMedicoInput | CitaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutMedicoInput | CitaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutMedicoInput | CitaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type HistoriaClinicaUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput> | HistoriaClinicaCreateWithoutMedicoInput[] | HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutMedicoInput | HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    upsert?: HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput | HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: HistoriaClinicaCreateManyMedicoInputEnvelope
    set?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    disconnect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    delete?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    update?: HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput | HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput | HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutMedicoInput | CitaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutMedicoInput | CitaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutMedicoInput | CitaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput> | HistoriaClinicaCreateWithoutMedicoInput[] | HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutMedicoInput | HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    upsert?: HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput | HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: HistoriaClinicaCreateManyMedicoInputEnvelope
    set?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    disconnect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    delete?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    connect?: HistoriaClinicaWhereUniqueInput | HistoriaClinicaWhereUniqueInput[]
    update?: HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput | HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput | HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCitasInput = {
    create?: XOR<UsuarioCreateWithoutCitasInput, UsuarioUncheckedCreateWithoutCitasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MedicoCreateNestedOneWithoutCitasInput = {
    create?: XOR<MedicoCreateWithoutCitasInput, MedicoUncheckedCreateWithoutCitasInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutCitasInput
    connect?: MedicoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCitasInput, UsuarioUncheckedCreateWithoutCitasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCitasInput
    upsert?: UsuarioUpsertWithoutCitasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCitasInput, UsuarioUpdateWithoutCitasInput>, UsuarioUncheckedUpdateWithoutCitasInput>
  }

  export type MedicoUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<MedicoCreateWithoutCitasInput, MedicoUncheckedCreateWithoutCitasInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutCitasInput
    upsert?: MedicoUpsertWithoutCitasInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutCitasInput, MedicoUpdateWithoutCitasInput>, MedicoUncheckedUpdateWithoutCitasInput>
  }

  export type UsuarioCreateNestedOneWithoutHistoriasInput = {
    create?: XOR<UsuarioCreateWithoutHistoriasInput, UsuarioUncheckedCreateWithoutHistoriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistoriasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MedicoCreateNestedOneWithoutHistoriasInput = {
    create?: XOR<MedicoCreateWithoutHistoriasInput, MedicoUncheckedCreateWithoutHistoriasInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutHistoriasInput
    connect?: MedicoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutHistoriasNestedInput = {
    create?: XOR<UsuarioCreateWithoutHistoriasInput, UsuarioUncheckedCreateWithoutHistoriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistoriasInput
    upsert?: UsuarioUpsertWithoutHistoriasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutHistoriasInput, UsuarioUpdateWithoutHistoriasInput>, UsuarioUncheckedUpdateWithoutHistoriasInput>
  }

  export type MedicoUpdateOneRequiredWithoutHistoriasNestedInput = {
    create?: XOR<MedicoCreateWithoutHistoriasInput, MedicoUncheckedCreateWithoutHistoriasInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutHistoriasInput
    upsert?: MedicoUpsertWithoutHistoriasInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutHistoriasInput, MedicoUpdateWithoutHistoriasInput>, MedicoUncheckedUpdateWithoutHistoriasInput>
  }

  export type UsuarioCreateNestedOneWithoutMensajesEnviadosInput = {
    create?: XOR<UsuarioCreateWithoutMensajesEnviadosInput, UsuarioUncheckedCreateWithoutMensajesEnviadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesEnviadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMensajesRecibidosInput = {
    create?: XOR<UsuarioCreateWithoutMensajesRecibidosInput, UsuarioUncheckedCreateWithoutMensajesRecibidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesRecibidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutMensajesEnviadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutMensajesEnviadosInput, UsuarioUncheckedCreateWithoutMensajesEnviadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesEnviadosInput
    upsert?: UsuarioUpsertWithoutMensajesEnviadosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMensajesEnviadosInput, UsuarioUpdateWithoutMensajesEnviadosInput>, UsuarioUncheckedUpdateWithoutMensajesEnviadosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMensajesRecibidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutMensajesRecibidosInput, UsuarioUncheckedCreateWithoutMensajesRecibidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensajesRecibidosInput
    upsert?: UsuarioUpsertWithoutMensajesRecibidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMensajesRecibidosInput, UsuarioUpdateWithoutMensajesRecibidosInput>, UsuarioUncheckedUpdateWithoutMensajesRecibidosInput>
  }

  export type UsuarioCreateNestedOneWithoutAuditoriasInput = {
    create?: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAuditoriasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutAuditoriasNestedInput = {
    create?: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAuditoriasInput
    upsert?: UsuarioUpsertWithoutAuditoriasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAuditoriasInput, UsuarioUpdateWithoutAuditoriasInput>, UsuarioUncheckedUpdateWithoutAuditoriasInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type MedicoCreateWithoutUsuarioInput = {
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    citas?: CitaCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    especialidadId: number
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutUsuarioInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
  }

  export type CitaCreateWithoutPacienteInput = {
    fecha: Date | string
    hora: Date | string
    medico: MedicoCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutPacienteInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    medicoId: number
  }

  export type CitaCreateOrConnectWithoutPacienteInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput>
  }

  export type CitaCreateManyPacienteInputEnvelope = {
    data: CitaCreateManyPacienteInput | CitaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type HistoriaClinicaCreateWithoutPacienteInput = {
    fecha: Date | string
    descripcion: string
    medico: MedicoCreateNestedOneWithoutHistoriasInput
  }

  export type HistoriaClinicaUncheckedCreateWithoutPacienteInput = {
    id?: number
    medicoId: number
    fecha: Date | string
    descripcion: string
  }

  export type HistoriaClinicaCreateOrConnectWithoutPacienteInput = {
    where: HistoriaClinicaWhereUniqueInput
    create: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput>
  }

  export type HistoriaClinicaCreateManyPacienteInputEnvelope = {
    data: HistoriaClinicaCreateManyPacienteInput | HistoriaClinicaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type MensajeCreateWithoutRemitenteInput = {
    fecha: Date | string
    mensaje: string
    destinatario: UsuarioCreateNestedOneWithoutMensajesRecibidosInput
  }

  export type MensajeUncheckedCreateWithoutRemitenteInput = {
    id?: number
    destinatarioId: number
    fecha: Date | string
    mensaje: string
  }

  export type MensajeCreateOrConnectWithoutRemitenteInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput>
  }

  export type MensajeCreateManyRemitenteInputEnvelope = {
    data: MensajeCreateManyRemitenteInput | MensajeCreateManyRemitenteInput[]
    skipDuplicates?: boolean
  }

  export type MensajeCreateWithoutDestinatarioInput = {
    fecha: Date | string
    mensaje: string
    remitente: UsuarioCreateNestedOneWithoutMensajesEnviadosInput
  }

  export type MensajeUncheckedCreateWithoutDestinatarioInput = {
    id?: number
    remitenteId: number
    fecha: Date | string
    mensaje: string
  }

  export type MensajeCreateOrConnectWithoutDestinatarioInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutDestinatarioInput, MensajeUncheckedCreateWithoutDestinatarioInput>
  }

  export type MensajeCreateManyDestinatarioInputEnvelope = {
    data: MensajeCreateManyDestinatarioInput | MensajeCreateManyDestinatarioInput[]
    skipDuplicates?: boolean
  }

  export type AuditoriaCreateWithoutUsuarioInput = {
    fecha: Date | string
    accion: string
  }

  export type AuditoriaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fecha: Date | string
    accion: string
  }

  export type AuditoriaCreateOrConnectWithoutUsuarioInput = {
    where: AuditoriaWhereUniqueInput
    create: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type AuditoriaCreateManyUsuarioInputEnvelope = {
    data: AuditoriaCreateManyUsuarioInput | AuditoriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type MedicoUpsertWithoutUsuarioInput = {
    update: XOR<MedicoUpdateWithoutUsuarioInput, MedicoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutUsuarioInput, MedicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type MedicoUpdateWithoutUsuarioInput = {
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    citas?: CitaUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type CitaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutPacienteInput, CitaUncheckedUpdateWithoutPacienteInput>
    create: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutPacienteInput, CitaUncheckedUpdateWithoutPacienteInput>
  }

  export type CitaUpdateManyWithWhereWithoutPacienteInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type CitaScalarWhereInput = {
    AND?: CitaScalarWhereInput | CitaScalarWhereInput[]
    OR?: CitaScalarWhereInput[]
    NOT?: CitaScalarWhereInput | CitaScalarWhereInput[]
    id?: IntFilter<"Cita"> | number
    fecha?: DateTimeFilter<"Cita"> | Date | string
    hora?: DateTimeFilter<"Cita"> | Date | string
    pacienteId?: IntFilter<"Cita"> | number
    medicoId?: IntFilter<"Cita"> | number
  }

  export type HistoriaClinicaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: HistoriaClinicaWhereUniqueInput
    update: XOR<HistoriaClinicaUpdateWithoutPacienteInput, HistoriaClinicaUncheckedUpdateWithoutPacienteInput>
    create: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput>
  }

  export type HistoriaClinicaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: HistoriaClinicaWhereUniqueInput
    data: XOR<HistoriaClinicaUpdateWithoutPacienteInput, HistoriaClinicaUncheckedUpdateWithoutPacienteInput>
  }

  export type HistoriaClinicaUpdateManyWithWhereWithoutPacienteInput = {
    where: HistoriaClinicaScalarWhereInput
    data: XOR<HistoriaClinicaUpdateManyMutationInput, HistoriaClinicaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type HistoriaClinicaScalarWhereInput = {
    AND?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
    OR?: HistoriaClinicaScalarWhereInput[]
    NOT?: HistoriaClinicaScalarWhereInput | HistoriaClinicaScalarWhereInput[]
    id?: IntFilter<"HistoriaClinica"> | number
    pacienteId?: IntFilter<"HistoriaClinica"> | number
    medicoId?: IntFilter<"HistoriaClinica"> | number
    fecha?: DateTimeFilter<"HistoriaClinica"> | Date | string
    descripcion?: StringFilter<"HistoriaClinica"> | string
  }

  export type MensajeUpsertWithWhereUniqueWithoutRemitenteInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutRemitenteInput, MensajeUncheckedUpdateWithoutRemitenteInput>
    create: XOR<MensajeCreateWithoutRemitenteInput, MensajeUncheckedCreateWithoutRemitenteInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutRemitenteInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutRemitenteInput, MensajeUncheckedUpdateWithoutRemitenteInput>
  }

  export type MensajeUpdateManyWithWhereWithoutRemitenteInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutRemitenteInput>
  }

  export type MensajeScalarWhereInput = {
    AND?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    OR?: MensajeScalarWhereInput[]
    NOT?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
    id?: IntFilter<"Mensaje"> | number
    remitenteId?: IntFilter<"Mensaje"> | number
    destinatarioId?: IntFilter<"Mensaje"> | number
    fecha?: DateTimeFilter<"Mensaje"> | Date | string
    mensaje?: StringFilter<"Mensaje"> | string
  }

  export type MensajeUpsertWithWhereUniqueWithoutDestinatarioInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutDestinatarioInput, MensajeUncheckedUpdateWithoutDestinatarioInput>
    create: XOR<MensajeCreateWithoutDestinatarioInput, MensajeUncheckedCreateWithoutDestinatarioInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutDestinatarioInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutDestinatarioInput, MensajeUncheckedUpdateWithoutDestinatarioInput>
  }

  export type MensajeUpdateManyWithWhereWithoutDestinatarioInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutDestinatarioInput>
  }

  export type AuditoriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AuditoriaWhereUniqueInput
    update: XOR<AuditoriaUpdateWithoutUsuarioInput, AuditoriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type AuditoriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AuditoriaWhereUniqueInput
    data: XOR<AuditoriaUpdateWithoutUsuarioInput, AuditoriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AuditoriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: AuditoriaScalarWhereInput
    data: XOR<AuditoriaUpdateManyMutationInput, AuditoriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AuditoriaScalarWhereInput = {
    AND?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
    OR?: AuditoriaScalarWhereInput[]
    NOT?: AuditoriaScalarWhereInput | AuditoriaScalarWhereInput[]
    id?: IntFilter<"Auditoria"> | number
    usuarioId?: IntFilter<"Auditoria"> | number
    fecha?: DateTimeFilter<"Auditoria"> | Date | string
    accion?: StringFilter<"Auditoria"> | string
  }

  export type MedicoCreateWithoutEspecialidadInput = {
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
    citas?: CitaCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutEspecialidadInput = {
    id?: number
    usuarioId: number
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutEspecialidadInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput>
  }

  export type MedicoCreateManyEspecialidadInputEnvelope = {
    data: MedicoCreateManyEspecialidadInput | MedicoCreateManyEspecialidadInput[]
    skipDuplicates?: boolean
  }

  export type MedicoUpsertWithWhereUniqueWithoutEspecialidadInput = {
    where: MedicoWhereUniqueInput
    update: XOR<MedicoUpdateWithoutEspecialidadInput, MedicoUncheckedUpdateWithoutEspecialidadInput>
    create: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput>
  }

  export type MedicoUpdateWithWhereUniqueWithoutEspecialidadInput = {
    where: MedicoWhereUniqueInput
    data: XOR<MedicoUpdateWithoutEspecialidadInput, MedicoUncheckedUpdateWithoutEspecialidadInput>
  }

  export type MedicoUpdateManyWithWhereWithoutEspecialidadInput = {
    where: MedicoScalarWhereInput
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyWithoutEspecialidadInput>
  }

  export type MedicoScalarWhereInput = {
    AND?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
    OR?: MedicoScalarWhereInput[]
    NOT?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
    id?: IntFilter<"Medico"> | number
    usuarioId?: IntFilter<"Medico"> | number
    especialidadId?: IntFilter<"Medico"> | number
  }

  export type UsuarioCreateWithoutMedicoInput = {
    nombre: string
    email: string
    contraseña: string
    rol: string
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMedicoInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    rol: string
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMedicoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMedicoInput, UsuarioUncheckedCreateWithoutMedicoInput>
  }

  export type EspecialidadCreateWithoutMedicosInput = {
    nombre: string
  }

  export type EspecialidadUncheckedCreateWithoutMedicosInput = {
    id?: number
    nombre: string
  }

  export type EspecialidadCreateOrConnectWithoutMedicosInput = {
    where: EspecialidadWhereUniqueInput
    create: XOR<EspecialidadCreateWithoutMedicosInput, EspecialidadUncheckedCreateWithoutMedicosInput>
  }

  export type CitaCreateWithoutMedicoInput = {
    fecha: Date | string
    hora: Date | string
    paciente: UsuarioCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutMedicoInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    pacienteId: number
  }

  export type CitaCreateOrConnectWithoutMedicoInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput>
  }

  export type CitaCreateManyMedicoInputEnvelope = {
    data: CitaCreateManyMedicoInput | CitaCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type HistoriaClinicaCreateWithoutMedicoInput = {
    fecha: Date | string
    descripcion: string
    paciente: UsuarioCreateNestedOneWithoutHistoriasInput
  }

  export type HistoriaClinicaUncheckedCreateWithoutMedicoInput = {
    id?: number
    pacienteId: number
    fecha: Date | string
    descripcion: string
  }

  export type HistoriaClinicaCreateOrConnectWithoutMedicoInput = {
    where: HistoriaClinicaWhereUniqueInput
    create: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput>
  }

  export type HistoriaClinicaCreateManyMedicoInputEnvelope = {
    data: HistoriaClinicaCreateManyMedicoInput | HistoriaClinicaCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutMedicoInput = {
    update: XOR<UsuarioUpdateWithoutMedicoInput, UsuarioUncheckedUpdateWithoutMedicoInput>
    create: XOR<UsuarioCreateWithoutMedicoInput, UsuarioUncheckedCreateWithoutMedicoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMedicoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMedicoInput, UsuarioUncheckedUpdateWithoutMedicoInput>
  }

  export type UsuarioUpdateWithoutMedicoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type EspecialidadUpsertWithoutMedicosInput = {
    update: XOR<EspecialidadUpdateWithoutMedicosInput, EspecialidadUncheckedUpdateWithoutMedicosInput>
    create: XOR<EspecialidadCreateWithoutMedicosInput, EspecialidadUncheckedCreateWithoutMedicosInput>
    where?: EspecialidadWhereInput
  }

  export type EspecialidadUpdateToOneWithWhereWithoutMedicosInput = {
    where?: EspecialidadWhereInput
    data: XOR<EspecialidadUpdateWithoutMedicosInput, EspecialidadUncheckedUpdateWithoutMedicosInput>
  }

  export type EspecialidadUpdateWithoutMedicosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadUncheckedUpdateWithoutMedicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CitaUpsertWithWhereUniqueWithoutMedicoInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutMedicoInput, CitaUncheckedUpdateWithoutMedicoInput>
    create: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutMedicoInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutMedicoInput, CitaUncheckedUpdateWithoutMedicoInput>
  }

  export type CitaUpdateManyWithWhereWithoutMedicoInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutMedicoInput>
  }

  export type HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput = {
    where: HistoriaClinicaWhereUniqueInput
    update: XOR<HistoriaClinicaUpdateWithoutMedicoInput, HistoriaClinicaUncheckedUpdateWithoutMedicoInput>
    create: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput>
  }

  export type HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput = {
    where: HistoriaClinicaWhereUniqueInput
    data: XOR<HistoriaClinicaUpdateWithoutMedicoInput, HistoriaClinicaUncheckedUpdateWithoutMedicoInput>
  }

  export type HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput = {
    where: HistoriaClinicaScalarWhereInput
    data: XOR<HistoriaClinicaUpdateManyMutationInput, HistoriaClinicaUncheckedUpdateManyWithoutMedicoInput>
  }

  export type UsuarioCreateWithoutCitasInput = {
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCitasInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCitasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCitasInput, UsuarioUncheckedCreateWithoutCitasInput>
  }

  export type MedicoCreateWithoutCitasInput = {
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    historias?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutCitasInput = {
    id?: number
    usuarioId: number
    especialidadId: number
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutCitasInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutCitasInput, MedicoUncheckedCreateWithoutCitasInput>
  }

  export type UsuarioUpsertWithoutCitasInput = {
    update: XOR<UsuarioUpdateWithoutCitasInput, UsuarioUncheckedUpdateWithoutCitasInput>
    create: XOR<UsuarioCreateWithoutCitasInput, UsuarioUncheckedCreateWithoutCitasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCitasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCitasInput, UsuarioUncheckedUpdateWithoutCitasInput>
  }

  export type UsuarioUpdateWithoutCitasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MedicoUpsertWithoutCitasInput = {
    update: XOR<MedicoUpdateWithoutCitasInput, MedicoUncheckedUpdateWithoutCitasInput>
    create: XOR<MedicoCreateWithoutCitasInput, MedicoUncheckedCreateWithoutCitasInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutCitasInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutCitasInput, MedicoUncheckedUpdateWithoutCitasInput>
  }

  export type MedicoUpdateWithoutCitasInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type UsuarioCreateWithoutHistoriasInput = {
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutHistoriasInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutHistoriasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHistoriasInput, UsuarioUncheckedCreateWithoutHistoriasInput>
  }

  export type MedicoCreateWithoutHistoriasInput = {
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    citas?: CitaCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutHistoriasInput = {
    id?: number
    usuarioId: number
    especialidadId: number
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutHistoriasInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutHistoriasInput, MedicoUncheckedCreateWithoutHistoriasInput>
  }

  export type UsuarioUpsertWithoutHistoriasInput = {
    update: XOR<UsuarioUpdateWithoutHistoriasInput, UsuarioUncheckedUpdateWithoutHistoriasInput>
    create: XOR<UsuarioCreateWithoutHistoriasInput, UsuarioUncheckedCreateWithoutHistoriasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutHistoriasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutHistoriasInput, UsuarioUncheckedUpdateWithoutHistoriasInput>
  }

  export type UsuarioUpdateWithoutHistoriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutHistoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MedicoUpsertWithoutHistoriasInput = {
    update: XOR<MedicoUpdateWithoutHistoriasInput, MedicoUncheckedUpdateWithoutHistoriasInput>
    create: XOR<MedicoCreateWithoutHistoriasInput, MedicoUncheckedCreateWithoutHistoriasInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutHistoriasInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutHistoriasInput, MedicoUncheckedUpdateWithoutHistoriasInput>
  }

  export type MedicoUpdateWithoutHistoriasInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    citas?: CitaUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutHistoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    especialidadId?: IntFieldUpdateOperationsInput | number
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type UsuarioCreateWithoutMensajesEnviadosInput = {
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMensajesEnviadosInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMensajesEnviadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMensajesEnviadosInput, UsuarioUncheckedCreateWithoutMensajesEnviadosInput>
  }

  export type UsuarioCreateWithoutMensajesRecibidosInput = {
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMensajesRecibidosInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMensajesRecibidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMensajesRecibidosInput, UsuarioUncheckedCreateWithoutMensajesRecibidosInput>
  }

  export type UsuarioUpsertWithoutMensajesEnviadosInput = {
    update: XOR<UsuarioUpdateWithoutMensajesEnviadosInput, UsuarioUncheckedUpdateWithoutMensajesEnviadosInput>
    create: XOR<UsuarioCreateWithoutMensajesEnviadosInput, UsuarioUncheckedCreateWithoutMensajesEnviadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMensajesEnviadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMensajesEnviadosInput, UsuarioUncheckedUpdateWithoutMensajesEnviadosInput>
  }

  export type UsuarioUpdateWithoutMensajesEnviadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMensajesEnviadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUpsertWithoutMensajesRecibidosInput = {
    update: XOR<UsuarioUpdateWithoutMensajesRecibidosInput, UsuarioUncheckedUpdateWithoutMensajesRecibidosInput>
    create: XOR<UsuarioCreateWithoutMensajesRecibidosInput, UsuarioUncheckedCreateWithoutMensajesRecibidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMensajesRecibidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMensajesRecibidosInput, UsuarioUncheckedUpdateWithoutMensajesRecibidosInput>
  }

  export type UsuarioUpdateWithoutMensajesRecibidosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMensajesRecibidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutAuditoriasInput = {
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUncheckedCreateWithoutAuditoriasInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    rol: string
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioCreateOrConnectWithoutAuditoriasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
  }

  export type UsuarioUpsertWithoutAuditoriasInput = {
    update: XOR<UsuarioUpdateWithoutAuditoriasInput, UsuarioUncheckedUpdateWithoutAuditoriasInput>
    create: XOR<UsuarioCreateWithoutAuditoriasInput, UsuarioUncheckedCreateWithoutAuditoriasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAuditoriasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAuditoriasInput, UsuarioUncheckedUpdateWithoutAuditoriasInput>
  }

  export type UsuarioUpdateWithoutAuditoriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAuditoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
  }

  export type CitaCreateManyPacienteInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    medicoId: number
  }

  export type HistoriaClinicaCreateManyPacienteInput = {
    id?: number
    medicoId: number
    fecha: Date | string
    descripcion: string
  }

  export type MensajeCreateManyRemitenteInput = {
    id?: number
    destinatarioId: number
    fecha: Date | string
    mensaje: string
  }

  export type MensajeCreateManyDestinatarioInput = {
    id?: number
    remitenteId: number
    fecha: Date | string
    mensaje: string
  }

  export type AuditoriaCreateManyUsuarioInput = {
    id?: number
    fecha: Date | string
    accion: string
  }

  export type CitaUpdateWithoutPacienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    medicoId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    medicoId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriaClinicaUpdateWithoutPacienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneRequiredWithoutHistoriasNestedInput
  }

  export type HistoriaClinicaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type HistoriaClinicaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeUpdateWithoutRemitenteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mensaje?: StringFieldUpdateOperationsInput | string
    destinatario?: UsuarioUpdateOneRequiredWithoutMensajesRecibidosNestedInput
  }

  export type MensajeUncheckedUpdateWithoutRemitenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    destinatarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mensaje?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeUncheckedUpdateManyWithoutRemitenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    destinatarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mensaje?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeUpdateWithoutDestinatarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mensaje?: StringFieldUpdateOperationsInput | string
    remitente?: UsuarioUpdateOneRequiredWithoutMensajesEnviadosNestedInput
  }

  export type MensajeUncheckedUpdateWithoutDestinatarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    remitenteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mensaje?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeUncheckedUpdateManyWithoutDestinatarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    remitenteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mensaje?: StringFieldUpdateOperationsInput | string
  }

  export type AuditoriaUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
  }

  export type AuditoriaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
  }

  export type AuditoriaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
  }

  export type MedicoCreateManyEspecialidadInput = {
    id?: number
    usuarioId: number
  }

  export type MedicoUpdateWithoutEspecialidadInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
    citas?: CitaUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutEspecialidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateManyWithoutEspecialidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaCreateManyMedicoInput = {
    id?: number
    fecha: Date | string
    hora: Date | string
    pacienteId: number
  }

  export type HistoriaClinicaCreateManyMedicoInput = {
    id?: number
    pacienteId: number
    fecha: Date | string
    descripcion: string
  }

  export type CitaUpdateWithoutMedicoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: UsuarioUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaUncheckedUpdateManyWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriaClinicaUpdateWithoutMedicoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
    paciente?: UsuarioUpdateOneRequiredWithoutHistoriasNestedInput
  }

  export type HistoriaClinicaUncheckedUpdateWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type HistoriaClinicaUncheckedUpdateManyWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
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