
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
 * Model Conversacion
 * 
 */
export type Conversacion = $Result.DefaultSelection<Prisma.$ConversacionPayload>
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
 * Enums
 */
export namespace $Enums {
  export const TipoCita: {
  CONSULTA: 'CONSULTA',
  SEGUIMIENTO: 'SEGUIMIENTO',
  EMERGENCIA: 'EMERGENCIA',
  ESPECIALISTA: 'ESPECIALISTA',
  CHEQUEO: 'CHEQUEO'
};

export type TipoCita = (typeof TipoCita)[keyof typeof TipoCita]


export const EstadoCita: {
  PROGRAMADA: 'PROGRAMADA',
  CONFIRMADA: 'CONFIRMADA',
  EN_PROGRESO: 'EN_PROGRESO',
  COMPLETADA: 'COMPLETADA',
  CANCELADA: 'CANCELADA',
  NO_ASISTIO: 'NO_ASISTIO'
};

export type EstadoCita = (typeof EstadoCita)[keyof typeof EstadoCita]


export const PrioridadCita: {
  BAJA: 'BAJA',
  NORMAL: 'NORMAL',
  ALTA: 'ALTA',
  URGENTE: 'URGENTE'
};

export type PrioridadCita = (typeof PrioridadCita)[keyof typeof PrioridadCita]

}

export type TipoCita = $Enums.TipoCita

export const TipoCita: typeof $Enums.TipoCita

export type EstadoCita = $Enums.EstadoCita

export const EstadoCita: typeof $Enums.EstadoCita

export type PrioridadCita = $Enums.PrioridadCita

export const PrioridadCita: typeof $Enums.PrioridadCita

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
   * `prisma.conversacion`: Exposes CRUD operations for the **Conversacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversacions
    * const conversacions = await prisma.conversacion.findMany()
    * ```
    */
  get conversacion(): Prisma.ConversacionDelegate<ExtArgs, ClientOptions>;

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
    Conversacion: 'Conversacion',
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
      modelProps: "usuario" | "especialidad" | "medico" | "cita" | "historiaClinica" | "conversacion" | "mensaje" | "auditoria"
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
      Conversacion: {
        payload: Prisma.$ConversacionPayload<ExtArgs>
        fields: Prisma.ConversacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          findFirst: {
            args: Prisma.ConversacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          findMany: {
            args: Prisma.ConversacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>[]
          }
          create: {
            args: Prisma.ConversacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          createMany: {
            args: Prisma.ConversacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConversacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          update: {
            args: Prisma.ConversacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          deleteMany: {
            args: Prisma.ConversacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConversacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversacionPayload>
          }
          aggregate: {
            args: Prisma.ConversacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversacion>
          }
          groupBy: {
            args: Prisma.ConversacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversacionCountArgs<ExtArgs>
            result: $Utils.Optional<ConversacionCountAggregateOutputType> | number
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
    conversacion?: ConversacionOmit
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
    conversaciones: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | UsuarioCountOutputTypeCountCitasArgs
    historias?: boolean | UsuarioCountOutputTypeCountHistoriasArgs
    mensajesEnviados?: boolean | UsuarioCountOutputTypeCountMensajesEnviadosArgs
    mensajesRecibidos?: boolean | UsuarioCountOutputTypeCountMensajesRecibidosArgs
    auditorias?: boolean | UsuarioCountOutputTypeCountAuditoriasArgs
    conversaciones?: boolean | UsuarioCountOutputTypeCountConversacionesArgs
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
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountConversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
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
    conversaciones: number
  }

  export type MedicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | MedicoCountOutputTypeCountCitasArgs
    historias?: boolean | MedicoCountOutputTypeCountHistoriasArgs
    conversaciones?: boolean | MedicoCountOutputTypeCountConversacionesArgs
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
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountConversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
  }


  /**
   * Count Type ConversacionCountOutputType
   */

  export type ConversacionCountOutputType = {
    mensajes: number
  }

  export type ConversacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajes?: boolean | ConversacionCountOutputTypeCountMensajesArgs
  }

  // Custom InputTypes
  /**
   * ConversacionCountOutputType without action
   */
  export type ConversacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionCountOutputType
     */
    select?: ConversacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversacionCountOutputType without action
   */
  export type ConversacionCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    contraseña: string | null
    rol: string | null
    telefono: string | null
    fechaNacimiento: Date | null
    fechaCreacion: Date | null
    ultimaActividad: Date | null
    activo: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    contraseña: string | null
    rol: string | null
    telefono: string | null
    fechaNacimiento: Date | null
    fechaCreacion: Date | null
    ultimaActividad: Date | null
    activo: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    contraseña: number
    rol: number
    telefono: number
    fechaNacimiento: number
    fechaCreacion: number
    ultimaActividad: number
    activo: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contraseña?: true
    rol?: true
    telefono?: true
    fechaNacimiento?: true
    fechaCreacion?: true
    ultimaActividad?: true
    activo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contraseña?: true
    rol?: true
    telefono?: true
    fechaNacimiento?: true
    fechaCreacion?: true
    ultimaActividad?: true
    activo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contraseña?: true
    rol?: true
    telefono?: true
    fechaNacimiento?: true
    fechaCreacion?: true
    ultimaActividad?: true
    activo?: true
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
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono: string | null
    fechaNacimiento: Date | null
    fechaCreacion: Date
    ultimaActividad: Date | null
    activo: boolean
    _count: UsuarioCountAggregateOutputType | null
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
    telefono?: boolean
    fechaNacimiento?: boolean
    fechaCreacion?: boolean
    ultimaActividad?: boolean
    activo?: boolean
    medico?: boolean | Usuario$medicoArgs<ExtArgs>
    citas?: boolean | Usuario$citasArgs<ExtArgs>
    historias?: boolean | Usuario$historiasArgs<ExtArgs>
    mensajesEnviados?: boolean | Usuario$mensajesEnviadosArgs<ExtArgs>
    mensajesRecibidos?: boolean | Usuario$mensajesRecibidosArgs<ExtArgs>
    auditorias?: boolean | Usuario$auditoriasArgs<ExtArgs>
    conversaciones?: boolean | Usuario$conversacionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    contraseña?: boolean
    rol?: boolean
    telefono?: boolean
    fechaNacimiento?: boolean
    fechaCreacion?: boolean
    ultimaActividad?: boolean
    activo?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "contraseña" | "rol" | "telefono" | "fechaNacimiento" | "fechaCreacion" | "ultimaActividad" | "activo", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | Usuario$medicoArgs<ExtArgs>
    citas?: boolean | Usuario$citasArgs<ExtArgs>
    historias?: boolean | Usuario$historiasArgs<ExtArgs>
    mensajesEnviados?: boolean | Usuario$mensajesEnviadosArgs<ExtArgs>
    mensajesRecibidos?: boolean | Usuario$mensajesRecibidosArgs<ExtArgs>
    auditorias?: boolean | Usuario$auditoriasArgs<ExtArgs>
    conversaciones?: boolean | Usuario$conversacionesArgs<ExtArgs>
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
      conversaciones: Prisma.$ConversacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      contraseña: string
      rol: string
      telefono: string | null
      fechaNacimiento: Date | null
      fechaCreacion: Date
      ultimaActividad: Date | null
      activo: boolean
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
    conversaciones<T extends Usuario$conversacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$conversacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly contraseña: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly fechaNacimiento: FieldRef<"Usuario", 'DateTime'>
    readonly fechaCreacion: FieldRef<"Usuario", 'DateTime'>
    readonly ultimaActividad: FieldRef<"Usuario", 'DateTime'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
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
   * Usuario.conversaciones
   */
  export type Usuario$conversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    cursor?: ConversacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
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
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  export type EspecialidadMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    activa: boolean | null
  }

  export type EspecialidadMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    activa: boolean | null
  }

  export type EspecialidadCountAggregateOutputType = {
    id: number
    nombre: number
    activa: number
    _all: number
  }


  export type EspecialidadMinAggregateInputType = {
    id?: true
    nombre?: true
    activa?: true
  }

  export type EspecialidadMaxAggregateInputType = {
    id?: true
    nombre?: true
    activa?: true
  }

  export type EspecialidadCountAggregateInputType = {
    id?: true
    nombre?: true
    activa?: true
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
    _min?: EspecialidadMinAggregateInputType
    _max?: EspecialidadMaxAggregateInputType
  }

  export type EspecialidadGroupByOutputType = {
    id: string
    nombre: string
    activa: boolean
    _count: EspecialidadCountAggregateOutputType | null
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
    activa?: boolean
    medicos?: boolean | Especialidad$medicosArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialidad"]>



  export type EspecialidadSelectScalar = {
    id?: boolean
    nombre?: boolean
    activa?: boolean
  }

  export type EspecialidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "activa", ExtArgs["result"]["especialidad"]>
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
      id: string
      nombre: string
      activa: boolean
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
    readonly id: FieldRef<"Especialidad", 'String'>
    readonly nombre: FieldRef<"Especialidad", 'String'>
    readonly activa: FieldRef<"Especialidad", 'Boolean'>
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
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  export type MedicoMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    especialidadId: string | null
    licencia: string | null
    horarioInicio: string | null
    horarioFin: string | null
  }

  export type MedicoMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    especialidadId: string | null
    licencia: string | null
    horarioInicio: string | null
    horarioFin: string | null
  }

  export type MedicoCountAggregateOutputType = {
    id: number
    usuarioId: number
    especialidadId: number
    licencia: number
    horarioInicio: number
    horarioFin: number
    _all: number
  }


  export type MedicoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
    licencia?: true
    horarioInicio?: true
    horarioFin?: true
  }

  export type MedicoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
    licencia?: true
    horarioInicio?: true
    horarioFin?: true
  }

  export type MedicoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    especialidadId?: true
    licencia?: true
    horarioInicio?: true
    horarioFin?: true
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
    _min?: MedicoMinAggregateInputType
    _max?: MedicoMaxAggregateInputType
  }

  export type MedicoGroupByOutputType = {
    id: string
    usuarioId: string
    especialidadId: string
    licencia: string | null
    horarioInicio: string | null
    horarioFin: string | null
    _count: MedicoCountAggregateOutputType | null
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
    licencia?: boolean
    horarioInicio?: boolean
    horarioFin?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    citas?: boolean | Medico$citasArgs<ExtArgs>
    historias?: boolean | Medico$historiasArgs<ExtArgs>
    conversaciones?: boolean | Medico$conversacionesArgs<ExtArgs>
    _count?: boolean | MedicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico"]>



  export type MedicoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    especialidadId?: boolean
    licencia?: boolean
    horarioInicio?: boolean
    horarioFin?: boolean
  }

  export type MedicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "especialidadId" | "licencia" | "horarioInicio" | "horarioFin", ExtArgs["result"]["medico"]>
  export type MedicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    citas?: boolean | Medico$citasArgs<ExtArgs>
    historias?: boolean | Medico$historiasArgs<ExtArgs>
    conversaciones?: boolean | Medico$conversacionesArgs<ExtArgs>
    _count?: boolean | MedicoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medico"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      especialidad: Prisma.$EspecialidadPayload<ExtArgs>
      citas: Prisma.$CitaPayload<ExtArgs>[]
      historias: Prisma.$HistoriaClinicaPayload<ExtArgs>[]
      conversaciones: Prisma.$ConversacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      especialidadId: string
      licencia: string | null
      horarioInicio: string | null
      horarioFin: string | null
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
    conversaciones<T extends Medico$conversacionesArgs<ExtArgs> = {}>(args?: Subset<T, Medico$conversacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Medico", 'String'>
    readonly usuarioId: FieldRef<"Medico", 'String'>
    readonly especialidadId: FieldRef<"Medico", 'String'>
    readonly licencia: FieldRef<"Medico", 'String'>
    readonly horarioInicio: FieldRef<"Medico", 'String'>
    readonly horarioFin: FieldRef<"Medico", 'String'>
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
   * Medico.conversaciones
   */
  export type Medico$conversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    cursor?: ConversacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
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
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  export type CitaMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    hora: Date | null
    pacienteId: string | null
    medicoId: string | null
    sintomas: string | null
    notas: string | null
    tipo: $Enums.TipoCita | null
    estado: $Enums.EstadoCita | null
    prioridad: $Enums.PrioridadCita | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type CitaMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    hora: Date | null
    pacienteId: string | null
    medicoId: string | null
    sintomas: string | null
    notas: string | null
    tipo: $Enums.TipoCita | null
    estado: $Enums.EstadoCita | null
    prioridad: $Enums.PrioridadCita | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type CitaCountAggregateOutputType = {
    id: number
    fecha: number
    hora: number
    pacienteId: number
    medicoId: number
    sintomas: number
    notas: number
    tipo: number
    estado: number
    prioridad: number
    fechaCreacion: number
    fechaActualizacion: number
    _all: number
  }


  export type CitaMinAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    pacienteId?: true
    medicoId?: true
    sintomas?: true
    notas?: true
    tipo?: true
    estado?: true
    prioridad?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type CitaMaxAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    pacienteId?: true
    medicoId?: true
    sintomas?: true
    notas?: true
    tipo?: true
    estado?: true
    prioridad?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type CitaCountAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    pacienteId?: true
    medicoId?: true
    sintomas?: true
    notas?: true
    tipo?: true
    estado?: true
    prioridad?: true
    fechaCreacion?: true
    fechaActualizacion?: true
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
    _min?: CitaMinAggregateInputType
    _max?: CitaMaxAggregateInputType
  }

  export type CitaGroupByOutputType = {
    id: string
    fecha: Date
    hora: Date
    pacienteId: string
    medicoId: string
    sintomas: string | null
    notas: string | null
    tipo: $Enums.TipoCita
    estado: $Enums.EstadoCita
    prioridad: $Enums.PrioridadCita
    fechaCreacion: Date
    fechaActualizacion: Date
    _count: CitaCountAggregateOutputType | null
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
    sintomas?: boolean
    notas?: boolean
    tipo?: boolean
    estado?: boolean
    prioridad?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    paciente?: boolean | UsuarioDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>



  export type CitaSelectScalar = {
    id?: boolean
    fecha?: boolean
    hora?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    sintomas?: boolean
    notas?: boolean
    tipo?: boolean
    estado?: boolean
    prioridad?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
  }

  export type CitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "hora" | "pacienteId" | "medicoId" | "sintomas" | "notas" | "tipo" | "estado" | "prioridad" | "fechaCreacion" | "fechaActualizacion", ExtArgs["result"]["cita"]>
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
      id: string
      fecha: Date
      hora: Date
      pacienteId: string
      medicoId: string
      sintomas: string | null
      notas: string | null
      tipo: $Enums.TipoCita
      estado: $Enums.EstadoCita
      prioridad: $Enums.PrioridadCita
      fechaCreacion: Date
      fechaActualizacion: Date
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
    readonly id: FieldRef<"Cita", 'String'>
    readonly fecha: FieldRef<"Cita", 'DateTime'>
    readonly hora: FieldRef<"Cita", 'DateTime'>
    readonly pacienteId: FieldRef<"Cita", 'String'>
    readonly medicoId: FieldRef<"Cita", 'String'>
    readonly sintomas: FieldRef<"Cita", 'String'>
    readonly notas: FieldRef<"Cita", 'String'>
    readonly tipo: FieldRef<"Cita", 'TipoCita'>
    readonly estado: FieldRef<"Cita", 'EstadoCita'>
    readonly prioridad: FieldRef<"Cita", 'PrioridadCita'>
    readonly fechaCreacion: FieldRef<"Cita", 'DateTime'>
    readonly fechaActualizacion: FieldRef<"Cita", 'DateTime'>
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
    _min: HistoriaClinicaMinAggregateOutputType | null
    _max: HistoriaClinicaMaxAggregateOutputType | null
  }

  export type HistoriaClinicaMinAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    medicoId: string | null
    fecha: Date | null
    diagnostico: string | null
    sintomas: string | null
    tratamiento: string | null
    medicamentos: string | null
    alergias: string | null
    signosVitales: string | null
    observaciones: string | null
    proximaRevision: Date | null
    estado: string | null
    fechaActualizacion: Date | null
  }

  export type HistoriaClinicaMaxAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    medicoId: string | null
    fecha: Date | null
    diagnostico: string | null
    sintomas: string | null
    tratamiento: string | null
    medicamentos: string | null
    alergias: string | null
    signosVitales: string | null
    observaciones: string | null
    proximaRevision: Date | null
    estado: string | null
    fechaActualizacion: Date | null
  }

  export type HistoriaClinicaCountAggregateOutputType = {
    id: number
    pacienteId: number
    medicoId: number
    fecha: number
    diagnostico: number
    sintomas: number
    tratamiento: number
    medicamentos: number
    alergias: number
    signosVitales: number
    observaciones: number
    proximaRevision: number
    estado: number
    fechaActualizacion: number
    _all: number
  }


  export type HistoriaClinicaMinAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
    fecha?: true
    diagnostico?: true
    sintomas?: true
    tratamiento?: true
    medicamentos?: true
    alergias?: true
    signosVitales?: true
    observaciones?: true
    proximaRevision?: true
    estado?: true
    fechaActualizacion?: true
  }

  export type HistoriaClinicaMaxAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
    fecha?: true
    diagnostico?: true
    sintomas?: true
    tratamiento?: true
    medicamentos?: true
    alergias?: true
    signosVitales?: true
    observaciones?: true
    proximaRevision?: true
    estado?: true
    fechaActualizacion?: true
  }

  export type HistoriaClinicaCountAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
    fecha?: true
    diagnostico?: true
    sintomas?: true
    tratamiento?: true
    medicamentos?: true
    alergias?: true
    signosVitales?: true
    observaciones?: true
    proximaRevision?: true
    estado?: true
    fechaActualizacion?: true
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
    _min?: HistoriaClinicaMinAggregateInputType
    _max?: HistoriaClinicaMaxAggregateInputType
  }

  export type HistoriaClinicaGroupByOutputType = {
    id: string
    pacienteId: string
    medicoId: string
    fecha: Date
    diagnostico: string
    sintomas: string | null
    tratamiento: string | null
    medicamentos: string | null
    alergias: string | null
    signosVitales: string | null
    observaciones: string | null
    proximaRevision: Date | null
    estado: string
    fechaActualizacion: Date
    _count: HistoriaClinicaCountAggregateOutputType | null
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
    diagnostico?: boolean
    sintomas?: boolean
    tratamiento?: boolean
    medicamentos?: boolean
    alergias?: boolean
    signosVitales?: boolean
    observaciones?: boolean
    proximaRevision?: boolean
    estado?: boolean
    fechaActualizacion?: boolean
    paciente?: boolean | UsuarioDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiaClinica"]>



  export type HistoriaClinicaSelectScalar = {
    id?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    fecha?: boolean
    diagnostico?: boolean
    sintomas?: boolean
    tratamiento?: boolean
    medicamentos?: boolean
    alergias?: boolean
    signosVitales?: boolean
    observaciones?: boolean
    proximaRevision?: boolean
    estado?: boolean
    fechaActualizacion?: boolean
  }

  export type HistoriaClinicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteId" | "medicoId" | "fecha" | "diagnostico" | "sintomas" | "tratamiento" | "medicamentos" | "alergias" | "signosVitales" | "observaciones" | "proximaRevision" | "estado" | "fechaActualizacion", ExtArgs["result"]["historiaClinica"]>
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
      id: string
      pacienteId: string
      medicoId: string
      fecha: Date
      diagnostico: string
      sintomas: string | null
      tratamiento: string | null
      medicamentos: string | null
      alergias: string | null
      signosVitales: string | null
      observaciones: string | null
      proximaRevision: Date | null
      estado: string
      fechaActualizacion: Date
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
    readonly id: FieldRef<"HistoriaClinica", 'String'>
    readonly pacienteId: FieldRef<"HistoriaClinica", 'String'>
    readonly medicoId: FieldRef<"HistoriaClinica", 'String'>
    readonly fecha: FieldRef<"HistoriaClinica", 'DateTime'>
    readonly diagnostico: FieldRef<"HistoriaClinica", 'String'>
    readonly sintomas: FieldRef<"HistoriaClinica", 'String'>
    readonly tratamiento: FieldRef<"HistoriaClinica", 'String'>
    readonly medicamentos: FieldRef<"HistoriaClinica", 'String'>
    readonly alergias: FieldRef<"HistoriaClinica", 'String'>
    readonly signosVitales: FieldRef<"HistoriaClinica", 'String'>
    readonly observaciones: FieldRef<"HistoriaClinica", 'String'>
    readonly proximaRevision: FieldRef<"HistoriaClinica", 'DateTime'>
    readonly estado: FieldRef<"HistoriaClinica", 'String'>
    readonly fechaActualizacion: FieldRef<"HistoriaClinica", 'DateTime'>
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
   * Model Conversacion
   */

  export type AggregateConversacion = {
    _count: ConversacionCountAggregateOutputType | null
    _min: ConversacionMinAggregateOutputType | null
    _max: ConversacionMaxAggregateOutputType | null
  }

  export type ConversacionMinAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    medicoId: string | null
    asunto: string | null
    estado: string | null
    fechaCreacion: Date | null
    ultimaActividad: Date | null
  }

  export type ConversacionMaxAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    medicoId: string | null
    asunto: string | null
    estado: string | null
    fechaCreacion: Date | null
    ultimaActividad: Date | null
  }

  export type ConversacionCountAggregateOutputType = {
    id: number
    pacienteId: number
    medicoId: number
    asunto: number
    estado: number
    fechaCreacion: number
    ultimaActividad: number
    _all: number
  }


  export type ConversacionMinAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
    asunto?: true
    estado?: true
    fechaCreacion?: true
    ultimaActividad?: true
  }

  export type ConversacionMaxAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
    asunto?: true
    estado?: true
    fechaCreacion?: true
    ultimaActividad?: true
  }

  export type ConversacionCountAggregateInputType = {
    id?: true
    pacienteId?: true
    medicoId?: true
    asunto?: true
    estado?: true
    fechaCreacion?: true
    ultimaActividad?: true
    _all?: true
  }

  export type ConversacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversacion to aggregate.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversacions
    **/
    _count?: true | ConversacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversacionMaxAggregateInputType
  }

  export type GetConversacionAggregateType<T extends ConversacionAggregateArgs> = {
        [P in keyof T & keyof AggregateConversacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversacion[P]>
      : GetScalarType<T[P], AggregateConversacion[P]>
  }




  export type ConversacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversacionWhereInput
    orderBy?: ConversacionOrderByWithAggregationInput | ConversacionOrderByWithAggregationInput[]
    by: ConversacionScalarFieldEnum[] | ConversacionScalarFieldEnum
    having?: ConversacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversacionCountAggregateInputType | true
    _min?: ConversacionMinAggregateInputType
    _max?: ConversacionMaxAggregateInputType
  }

  export type ConversacionGroupByOutputType = {
    id: string
    pacienteId: string
    medicoId: string
    asunto: string | null
    estado: string
    fechaCreacion: Date
    ultimaActividad: Date
    _count: ConversacionCountAggregateOutputType | null
    _min: ConversacionMinAggregateOutputType | null
    _max: ConversacionMaxAggregateOutputType | null
  }

  type GetConversacionGroupByPayload<T extends ConversacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversacionGroupByOutputType[P]>
            : GetScalarType<T[P], ConversacionGroupByOutputType[P]>
        }
      >
    >


  export type ConversacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    asunto?: boolean
    estado?: boolean
    fechaCreacion?: boolean
    ultimaActividad?: boolean
    paciente?: boolean | UsuarioDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    mensajes?: boolean | Conversacion$mensajesArgs<ExtArgs>
    _count?: boolean | ConversacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversacion"]>



  export type ConversacionSelectScalar = {
    id?: boolean
    pacienteId?: boolean
    medicoId?: boolean
    asunto?: boolean
    estado?: boolean
    fechaCreacion?: boolean
    ultimaActividad?: boolean
  }

  export type ConversacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteId" | "medicoId" | "asunto" | "estado" | "fechaCreacion" | "ultimaActividad", ExtArgs["result"]["conversacion"]>
  export type ConversacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | UsuarioDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    mensajes?: boolean | Conversacion$mensajesArgs<ExtArgs>
    _count?: boolean | ConversacionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ConversacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversacion"
    objects: {
      paciente: Prisma.$UsuarioPayload<ExtArgs>
      medico: Prisma.$MedicoPayload<ExtArgs>
      mensajes: Prisma.$MensajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pacienteId: string
      medicoId: string
      asunto: string | null
      estado: string
      fechaCreacion: Date
      ultimaActividad: Date
    }, ExtArgs["result"]["conversacion"]>
    composites: {}
  }

  type ConversacionGetPayload<S extends boolean | null | undefined | ConversacionDefaultArgs> = $Result.GetResult<Prisma.$ConversacionPayload, S>

  type ConversacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversacionCountAggregateInputType | true
    }

  export interface ConversacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversacion'], meta: { name: 'Conversacion' } }
    /**
     * Find zero or one Conversacion that matches the filter.
     * @param {ConversacionFindUniqueArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversacionFindUniqueArgs>(args: SelectSubset<T, ConversacionFindUniqueArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversacionFindUniqueOrThrowArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindFirstArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversacionFindFirstArgs>(args?: SelectSubset<T, ConversacionFindFirstArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindFirstOrThrowArgs} args - Arguments to find a Conversacion
     * @example
     * // Get one Conversacion
     * const conversacion = await prisma.conversacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversacions
     * const conversacions = await prisma.conversacion.findMany()
     * 
     * // Get first 10 Conversacions
     * const conversacions = await prisma.conversacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversacionWithIdOnly = await prisma.conversacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversacionFindManyArgs>(args?: SelectSubset<T, ConversacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversacion.
     * @param {ConversacionCreateArgs} args - Arguments to create a Conversacion.
     * @example
     * // Create one Conversacion
     * const Conversacion = await prisma.conversacion.create({
     *   data: {
     *     // ... data to create a Conversacion
     *   }
     * })
     * 
     */
    create<T extends ConversacionCreateArgs>(args: SelectSubset<T, ConversacionCreateArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversacions.
     * @param {ConversacionCreateManyArgs} args - Arguments to create many Conversacions.
     * @example
     * // Create many Conversacions
     * const conversacion = await prisma.conversacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversacionCreateManyArgs>(args?: SelectSubset<T, ConversacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversacion.
     * @param {ConversacionDeleteArgs} args - Arguments to delete one Conversacion.
     * @example
     * // Delete one Conversacion
     * const Conversacion = await prisma.conversacion.delete({
     *   where: {
     *     // ... filter to delete one Conversacion
     *   }
     * })
     * 
     */
    delete<T extends ConversacionDeleteArgs>(args: SelectSubset<T, ConversacionDeleteArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversacion.
     * @param {ConversacionUpdateArgs} args - Arguments to update one Conversacion.
     * @example
     * // Update one Conversacion
     * const conversacion = await prisma.conversacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversacionUpdateArgs>(args: SelectSubset<T, ConversacionUpdateArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversacions.
     * @param {ConversacionDeleteManyArgs} args - Arguments to filter Conversacions to delete.
     * @example
     * // Delete a few Conversacions
     * const { count } = await prisma.conversacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversacionDeleteManyArgs>(args?: SelectSubset<T, ConversacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversacions
     * const conversacion = await prisma.conversacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversacionUpdateManyArgs>(args: SelectSubset<T, ConversacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversacion.
     * @param {ConversacionUpsertArgs} args - Arguments to update or create a Conversacion.
     * @example
     * // Update or create a Conversacion
     * const conversacion = await prisma.conversacion.upsert({
     *   create: {
     *     // ... data to create a Conversacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversacion we want to update
     *   }
     * })
     */
    upsert<T extends ConversacionUpsertArgs>(args: SelectSubset<T, ConversacionUpsertArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionCountArgs} args - Arguments to filter Conversacions to count.
     * @example
     * // Count the number of Conversacions
     * const count = await prisma.conversacion.count({
     *   where: {
     *     // ... the filter for the Conversacions we want to count
     *   }
     * })
    **/
    count<T extends ConversacionCountArgs>(
      args?: Subset<T, ConversacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversacionAggregateArgs>(args: Subset<T, ConversacionAggregateArgs>): Prisma.PrismaPromise<GetConversacionAggregateType<T>>

    /**
     * Group by Conversacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionGroupByArgs} args - Group by arguments.
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
      T extends ConversacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversacionGroupByArgs['orderBy'] }
        : { orderBy?: ConversacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversacion model
   */
  readonly fields: ConversacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mensajes<T extends Conversacion$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, Conversacion$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversacion model
   */
  interface ConversacionFieldRefs {
    readonly id: FieldRef<"Conversacion", 'String'>
    readonly pacienteId: FieldRef<"Conversacion", 'String'>
    readonly medicoId: FieldRef<"Conversacion", 'String'>
    readonly asunto: FieldRef<"Conversacion", 'String'>
    readonly estado: FieldRef<"Conversacion", 'String'>
    readonly fechaCreacion: FieldRef<"Conversacion", 'DateTime'>
    readonly ultimaActividad: FieldRef<"Conversacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversacion findUnique
   */
  export type ConversacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion findUniqueOrThrow
   */
  export type ConversacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion findFirst
   */
  export type ConversacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversacions.
     */
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion findFirstOrThrow
   */
  export type ConversacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacion to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversacions.
     */
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion findMany
   */
  export type ConversacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter, which Conversacions to fetch.
     */
    where?: ConversacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversacions to fetch.
     */
    orderBy?: ConversacionOrderByWithRelationInput | ConversacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversacions.
     */
    cursor?: ConversacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversacions.
     */
    skip?: number
    distinct?: ConversacionScalarFieldEnum | ConversacionScalarFieldEnum[]
  }

  /**
   * Conversacion create
   */
  export type ConversacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversacion.
     */
    data: XOR<ConversacionCreateInput, ConversacionUncheckedCreateInput>
  }

  /**
   * Conversacion createMany
   */
  export type ConversacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversacions.
     */
    data: ConversacionCreateManyInput | ConversacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversacion update
   */
  export type ConversacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversacion.
     */
    data: XOR<ConversacionUpdateInput, ConversacionUncheckedUpdateInput>
    /**
     * Choose, which Conversacion to update.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion updateMany
   */
  export type ConversacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversacions.
     */
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyInput>
    /**
     * Filter which Conversacions to update
     */
    where?: ConversacionWhereInput
    /**
     * Limit how many Conversacions to update.
     */
    limit?: number
  }

  /**
   * Conversacion upsert
   */
  export type ConversacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversacion to update in case it exists.
     */
    where: ConversacionWhereUniqueInput
    /**
     * In case the Conversacion found by the `where` argument doesn't exist, create a new Conversacion with this data.
     */
    create: XOR<ConversacionCreateInput, ConversacionUncheckedCreateInput>
    /**
     * In case the Conversacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversacionUpdateInput, ConversacionUncheckedUpdateInput>
  }

  /**
   * Conversacion delete
   */
  export type ConversacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
    /**
     * Filter which Conversacion to delete.
     */
    where: ConversacionWhereUniqueInput
  }

  /**
   * Conversacion deleteMany
   */
  export type ConversacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversacions to delete
     */
    where?: ConversacionWhereInput
    /**
     * Limit how many Conversacions to delete.
     */
    limit?: number
  }

  /**
   * Conversacion.mensajes
   */
  export type Conversacion$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Conversacion without action
   */
  export type ConversacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversacion
     */
    select?: ConversacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversacion
     */
    omit?: ConversacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversacionInclude<ExtArgs> | null
  }


  /**
   * Model Mensaje
   */

  export type AggregateMensaje = {
    _count: MensajeCountAggregateOutputType | null
    _min: MensajeMinAggregateOutputType | null
    _max: MensajeMaxAggregateOutputType | null
  }

  export type MensajeMinAggregateOutputType = {
    id: string | null
    conversacionId: string | null
    remitenteId: string | null
    destinatarioId: string | null
    contenido: string | null
    fecha: Date | null
    leido: boolean | null
    tipoRemitente: string | null
  }

  export type MensajeMaxAggregateOutputType = {
    id: string | null
    conversacionId: string | null
    remitenteId: string | null
    destinatarioId: string | null
    contenido: string | null
    fecha: Date | null
    leido: boolean | null
    tipoRemitente: string | null
  }

  export type MensajeCountAggregateOutputType = {
    id: number
    conversacionId: number
    remitenteId: number
    destinatarioId: number
    contenido: number
    fecha: number
    leido: number
    tipoRemitente: number
    _all: number
  }


  export type MensajeMinAggregateInputType = {
    id?: true
    conversacionId?: true
    remitenteId?: true
    destinatarioId?: true
    contenido?: true
    fecha?: true
    leido?: true
    tipoRemitente?: true
  }

  export type MensajeMaxAggregateInputType = {
    id?: true
    conversacionId?: true
    remitenteId?: true
    destinatarioId?: true
    contenido?: true
    fecha?: true
    leido?: true
    tipoRemitente?: true
  }

  export type MensajeCountAggregateInputType = {
    id?: true
    conversacionId?: true
    remitenteId?: true
    destinatarioId?: true
    contenido?: true
    fecha?: true
    leido?: true
    tipoRemitente?: true
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
    _min?: MensajeMinAggregateInputType
    _max?: MensajeMaxAggregateInputType
  }

  export type MensajeGroupByOutputType = {
    id: string
    conversacionId: string
    remitenteId: string
    destinatarioId: string
    contenido: string
    fecha: Date
    leido: boolean
    tipoRemitente: string
    _count: MensajeCountAggregateOutputType | null
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
    conversacionId?: boolean
    remitenteId?: boolean
    destinatarioId?: boolean
    contenido?: boolean
    fecha?: boolean
    leido?: boolean
    tipoRemitente?: boolean
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    remitente?: boolean | UsuarioDefaultArgs<ExtArgs>
    destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensaje"]>



  export type MensajeSelectScalar = {
    id?: boolean
    conversacionId?: boolean
    remitenteId?: boolean
    destinatarioId?: boolean
    contenido?: boolean
    fecha?: boolean
    leido?: boolean
    tipoRemitente?: boolean
  }

  export type MensajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversacionId" | "remitenteId" | "destinatarioId" | "contenido" | "fecha" | "leido" | "tipoRemitente", ExtArgs["result"]["mensaje"]>
  export type MensajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversacion?: boolean | ConversacionDefaultArgs<ExtArgs>
    remitente?: boolean | UsuarioDefaultArgs<ExtArgs>
    destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MensajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensaje"
    objects: {
      conversacion: Prisma.$ConversacionPayload<ExtArgs>
      remitente: Prisma.$UsuarioPayload<ExtArgs>
      destinatario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversacionId: string
      remitenteId: string
      destinatarioId: string
      contenido: string
      fecha: Date
      leido: boolean
      tipoRemitente: string
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
    conversacion<T extends ConversacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversacionDefaultArgs<ExtArgs>>): Prisma__ConversacionClient<$Result.GetResult<Prisma.$ConversacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Mensaje", 'String'>
    readonly conversacionId: FieldRef<"Mensaje", 'String'>
    readonly remitenteId: FieldRef<"Mensaje", 'String'>
    readonly destinatarioId: FieldRef<"Mensaje", 'String'>
    readonly contenido: FieldRef<"Mensaje", 'String'>
    readonly fecha: FieldRef<"Mensaje", 'DateTime'>
    readonly leido: FieldRef<"Mensaje", 'Boolean'>
    readonly tipoRemitente: FieldRef<"Mensaje", 'String'>
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
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  export type AuditoriaMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    fecha: Date | null
    accion: string | null
    detalles: string | null
    ip: string | null
  }

  export type AuditoriaMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    fecha: Date | null
    accion: string | null
    detalles: string | null
    ip: string | null
  }

  export type AuditoriaCountAggregateOutputType = {
    id: number
    usuarioId: number
    fecha: number
    accion: number
    detalles: number
    ip: number
    _all: number
  }


  export type AuditoriaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    fecha?: true
    accion?: true
    detalles?: true
    ip?: true
  }

  export type AuditoriaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    fecha?: true
    accion?: true
    detalles?: true
    ip?: true
  }

  export type AuditoriaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    fecha?: true
    accion?: true
    detalles?: true
    ip?: true
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
    _min?: AuditoriaMinAggregateInputType
    _max?: AuditoriaMaxAggregateInputType
  }

  export type AuditoriaGroupByOutputType = {
    id: string
    usuarioId: string
    fecha: Date
    accion: string
    detalles: string | null
    ip: string | null
    _count: AuditoriaCountAggregateOutputType | null
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
    detalles?: boolean
    ip?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditoria"]>



  export type AuditoriaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    fecha?: boolean
    accion?: boolean
    detalles?: boolean
    ip?: boolean
  }

  export type AuditoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "fecha" | "accion" | "detalles" | "ip", ExtArgs["result"]["auditoria"]>
  export type AuditoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AuditoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auditoria"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      fecha: Date
      accion: string
      detalles: string | null
      ip: string | null
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
    readonly id: FieldRef<"Auditoria", 'String'>
    readonly usuarioId: FieldRef<"Auditoria", 'String'>
    readonly fecha: FieldRef<"Auditoria", 'DateTime'>
    readonly accion: FieldRef<"Auditoria", 'String'>
    readonly detalles: FieldRef<"Auditoria", 'String'>
    readonly ip: FieldRef<"Auditoria", 'String'>
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
    rol: 'rol',
    telefono: 'telefono',
    fechaNacimiento: 'fechaNacimiento',
    fechaCreacion: 'fechaCreacion',
    ultimaActividad: 'ultimaActividad',
    activo: 'activo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EspecialidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    activa: 'activa'
  };

  export type EspecialidadScalarFieldEnum = (typeof EspecialidadScalarFieldEnum)[keyof typeof EspecialidadScalarFieldEnum]


  export const MedicoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    especialidadId: 'especialidadId',
    licencia: 'licencia',
    horarioInicio: 'horarioInicio',
    horarioFin: 'horarioFin'
  };

  export type MedicoScalarFieldEnum = (typeof MedicoScalarFieldEnum)[keyof typeof MedicoScalarFieldEnum]


  export const CitaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    hora: 'hora',
    pacienteId: 'pacienteId',
    medicoId: 'medicoId',
    sintomas: 'sintomas',
    notas: 'notas',
    tipo: 'tipo',
    estado: 'estado',
    prioridad: 'prioridad',
    fechaCreacion: 'fechaCreacion',
    fechaActualizacion: 'fechaActualizacion'
  };

  export type CitaScalarFieldEnum = (typeof CitaScalarFieldEnum)[keyof typeof CitaScalarFieldEnum]


  export const HistoriaClinicaScalarFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    medicoId: 'medicoId',
    fecha: 'fecha',
    diagnostico: 'diagnostico',
    sintomas: 'sintomas',
    tratamiento: 'tratamiento',
    medicamentos: 'medicamentos',
    alergias: 'alergias',
    signosVitales: 'signosVitales',
    observaciones: 'observaciones',
    proximaRevision: 'proximaRevision',
    estado: 'estado',
    fechaActualizacion: 'fechaActualizacion'
  };

  export type HistoriaClinicaScalarFieldEnum = (typeof HistoriaClinicaScalarFieldEnum)[keyof typeof HistoriaClinicaScalarFieldEnum]


  export const ConversacionScalarFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    medicoId: 'medicoId',
    asunto: 'asunto',
    estado: 'estado',
    fechaCreacion: 'fechaCreacion',
    ultimaActividad: 'ultimaActividad'
  };

  export type ConversacionScalarFieldEnum = (typeof ConversacionScalarFieldEnum)[keyof typeof ConversacionScalarFieldEnum]


  export const MensajeScalarFieldEnum: {
    id: 'id',
    conversacionId: 'conversacionId',
    remitenteId: 'remitenteId',
    destinatarioId: 'destinatarioId',
    contenido: 'contenido',
    fecha: 'fecha',
    leido: 'leido',
    tipoRemitente: 'tipoRemitente'
  };

  export type MensajeScalarFieldEnum = (typeof MensajeScalarFieldEnum)[keyof typeof MensajeScalarFieldEnum]


  export const AuditoriaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    fecha: 'fecha',
    accion: 'accion',
    detalles: 'detalles',
    ip: 'ip'
  };

  export type AuditoriaScalarFieldEnum = (typeof AuditoriaScalarFieldEnum)[keyof typeof AuditoriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    contraseña: 'contraseña',
    rol: 'rol',
    telefono: 'telefono'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const EspecialidadOrderByRelevanceFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type EspecialidadOrderByRelevanceFieldEnum = (typeof EspecialidadOrderByRelevanceFieldEnum)[keyof typeof EspecialidadOrderByRelevanceFieldEnum]


  export const MedicoOrderByRelevanceFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    especialidadId: 'especialidadId',
    licencia: 'licencia',
    horarioInicio: 'horarioInicio',
    horarioFin: 'horarioFin'
  };

  export type MedicoOrderByRelevanceFieldEnum = (typeof MedicoOrderByRelevanceFieldEnum)[keyof typeof MedicoOrderByRelevanceFieldEnum]


  export const CitaOrderByRelevanceFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    medicoId: 'medicoId',
    sintomas: 'sintomas',
    notas: 'notas'
  };

  export type CitaOrderByRelevanceFieldEnum = (typeof CitaOrderByRelevanceFieldEnum)[keyof typeof CitaOrderByRelevanceFieldEnum]


  export const HistoriaClinicaOrderByRelevanceFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    medicoId: 'medicoId',
    diagnostico: 'diagnostico',
    sintomas: 'sintomas',
    tratamiento: 'tratamiento',
    medicamentos: 'medicamentos',
    alergias: 'alergias',
    signosVitales: 'signosVitales',
    observaciones: 'observaciones',
    estado: 'estado'
  };

  export type HistoriaClinicaOrderByRelevanceFieldEnum = (typeof HistoriaClinicaOrderByRelevanceFieldEnum)[keyof typeof HistoriaClinicaOrderByRelevanceFieldEnum]


  export const ConversacionOrderByRelevanceFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    medicoId: 'medicoId',
    asunto: 'asunto',
    estado: 'estado'
  };

  export type ConversacionOrderByRelevanceFieldEnum = (typeof ConversacionOrderByRelevanceFieldEnum)[keyof typeof ConversacionOrderByRelevanceFieldEnum]


  export const MensajeOrderByRelevanceFieldEnum: {
    id: 'id',
    conversacionId: 'conversacionId',
    remitenteId: 'remitenteId',
    destinatarioId: 'destinatarioId',
    contenido: 'contenido',
    tipoRemitente: 'tipoRemitente'
  };

  export type MensajeOrderByRelevanceFieldEnum = (typeof MensajeOrderByRelevanceFieldEnum)[keyof typeof MensajeOrderByRelevanceFieldEnum]


  export const AuditoriaOrderByRelevanceFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    accion: 'accion',
    detalles: 'detalles',
    ip: 'ip'
  };

  export type AuditoriaOrderByRelevanceFieldEnum = (typeof AuditoriaOrderByRelevanceFieldEnum)[keyof typeof AuditoriaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TipoCita'
   */
  export type EnumTipoCitaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCita'>
    


  /**
   * Reference to a field of type 'EstadoCita'
   */
  export type EnumEstadoCitaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCita'>
    


  /**
   * Reference to a field of type 'PrioridadCita'
   */
  export type EnumPrioridadCitaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrioridadCita'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    fechaCreacion?: DateTimeFilter<"Usuario"> | Date | string
    ultimaActividad?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    activo?: BoolFilter<"Usuario"> | boolean
    medico?: XOR<MedicoNullableScalarRelationFilter, MedicoWhereInput> | null
    citas?: CitaListRelationFilter
    historias?: HistoriaClinicaListRelationFilter
    mensajesEnviados?: MensajeListRelationFilter
    mensajesRecibidos?: MensajeListRelationFilter
    auditorias?: AuditoriaListRelationFilter
    conversaciones?: ConversacionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
    ultimaActividad?: SortOrderInput | SortOrder
    activo?: SortOrder
    medico?: MedicoOrderByWithRelationInput
    citas?: CitaOrderByRelationAggregateInput
    historias?: HistoriaClinicaOrderByRelationAggregateInput
    mensajesEnviados?: MensajeOrderByRelationAggregateInput
    mensajesRecibidos?: MensajeOrderByRelationAggregateInput
    auditorias?: AuditoriaOrderByRelationAggregateInput
    conversaciones?: ConversacionOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    fechaCreacion?: DateTimeFilter<"Usuario"> | Date | string
    ultimaActividad?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    activo?: BoolFilter<"Usuario"> | boolean
    medico?: XOR<MedicoNullableScalarRelationFilter, MedicoWhereInput> | null
    citas?: CitaListRelationFilter
    historias?: HistoriaClinicaListRelationFilter
    mensajesEnviados?: MensajeListRelationFilter
    mensajesRecibidos?: MensajeListRelationFilter
    auditorias?: AuditoriaListRelationFilter
    conversaciones?: ConversacionListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
    ultimaActividad?: SortOrderInput | SortOrder
    activo?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    contraseña?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    fechaNacimiento?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    fechaCreacion?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    ultimaActividad?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type EspecialidadWhereInput = {
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    id?: StringFilter<"Especialidad"> | string
    nombre?: StringFilter<"Especialidad"> | string
    activa?: BoolFilter<"Especialidad"> | boolean
    medicos?: MedicoListRelationFilter
  }

  export type EspecialidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    activa?: SortOrder
    medicos?: MedicoOrderByRelationAggregateInput
    _relevance?: EspecialidadOrderByRelevanceInput
  }

  export type EspecialidadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    activa?: BoolFilter<"Especialidad"> | boolean
    medicos?: MedicoListRelationFilter
  }, "id" | "nombre">

  export type EspecialidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    activa?: SortOrder
    _count?: EspecialidadCountOrderByAggregateInput
    _max?: EspecialidadMaxOrderByAggregateInput
    _min?: EspecialidadMinOrderByAggregateInput
  }

  export type EspecialidadScalarWhereWithAggregatesInput = {
    AND?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    OR?: EspecialidadScalarWhereWithAggregatesInput[]
    NOT?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Especialidad"> | string
    nombre?: StringWithAggregatesFilter<"Especialidad"> | string
    activa?: BoolWithAggregatesFilter<"Especialidad"> | boolean
  }

  export type MedicoWhereInput = {
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    id?: StringFilter<"Medico"> | string
    usuarioId?: StringFilter<"Medico"> | string
    especialidadId?: StringFilter<"Medico"> | string
    licencia?: StringNullableFilter<"Medico"> | string | null
    horarioInicio?: StringNullableFilter<"Medico"> | string | null
    horarioFin?: StringNullableFilter<"Medico"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    especialidad?: XOR<EspecialidadScalarRelationFilter, EspecialidadWhereInput>
    citas?: CitaListRelationFilter
    historias?: HistoriaClinicaListRelationFilter
    conversaciones?: ConversacionListRelationFilter
  }

  export type MedicoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    licencia?: SortOrderInput | SortOrder
    horarioInicio?: SortOrderInput | SortOrder
    horarioFin?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    especialidad?: EspecialidadOrderByWithRelationInput
    citas?: CitaOrderByRelationAggregateInput
    historias?: HistoriaClinicaOrderByRelationAggregateInput
    conversaciones?: ConversacionOrderByRelationAggregateInput
    _relevance?: MedicoOrderByRelevanceInput
  }

  export type MedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    especialidadId?: StringFilter<"Medico"> | string
    licencia?: StringNullableFilter<"Medico"> | string | null
    horarioInicio?: StringNullableFilter<"Medico"> | string | null
    horarioFin?: StringNullableFilter<"Medico"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    especialidad?: XOR<EspecialidadScalarRelationFilter, EspecialidadWhereInput>
    citas?: CitaListRelationFilter
    historias?: HistoriaClinicaListRelationFilter
    conversaciones?: ConversacionListRelationFilter
  }, "id" | "usuarioId">

  export type MedicoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    licencia?: SortOrderInput | SortOrder
    horarioInicio?: SortOrderInput | SortOrder
    horarioFin?: SortOrderInput | SortOrder
    _count?: MedicoCountOrderByAggregateInput
    _max?: MedicoMaxOrderByAggregateInput
    _min?: MedicoMinOrderByAggregateInput
  }

  export type MedicoScalarWhereWithAggregatesInput = {
    AND?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    OR?: MedicoScalarWhereWithAggregatesInput[]
    NOT?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medico"> | string
    usuarioId?: StringWithAggregatesFilter<"Medico"> | string
    especialidadId?: StringWithAggregatesFilter<"Medico"> | string
    licencia?: StringNullableWithAggregatesFilter<"Medico"> | string | null
    horarioInicio?: StringNullableWithAggregatesFilter<"Medico"> | string | null
    horarioFin?: StringNullableWithAggregatesFilter<"Medico"> | string | null
  }

  export type CitaWhereInput = {
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    id?: StringFilter<"Cita"> | string
    fecha?: DateTimeFilter<"Cita"> | Date | string
    hora?: DateTimeFilter<"Cita"> | Date | string
    pacienteId?: StringFilter<"Cita"> | string
    medicoId?: StringFilter<"Cita"> | string
    sintomas?: StringNullableFilter<"Cita"> | string | null
    notas?: StringNullableFilter<"Cita"> | string | null
    tipo?: EnumTipoCitaFilter<"Cita"> | $Enums.TipoCita
    estado?: EnumEstadoCitaFilter<"Cita"> | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFilter<"Cita"> | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFilter<"Cita"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Cita"> | Date | string
    paciente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }

  export type CitaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    sintomas?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    paciente?: UsuarioOrderByWithRelationInput
    medico?: MedicoOrderByWithRelationInput
    _relevance?: CitaOrderByRelevanceInput
  }

  export type CitaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    fecha?: DateTimeFilter<"Cita"> | Date | string
    hora?: DateTimeFilter<"Cita"> | Date | string
    pacienteId?: StringFilter<"Cita"> | string
    medicoId?: StringFilter<"Cita"> | string
    sintomas?: StringNullableFilter<"Cita"> | string | null
    notas?: StringNullableFilter<"Cita"> | string | null
    tipo?: EnumTipoCitaFilter<"Cita"> | $Enums.TipoCita
    estado?: EnumEstadoCitaFilter<"Cita"> | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFilter<"Cita"> | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFilter<"Cita"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Cita"> | Date | string
    paciente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }, "id">

  export type CitaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    sintomas?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    _count?: CitaCountOrderByAggregateInput
    _max?: CitaMaxOrderByAggregateInput
    _min?: CitaMinOrderByAggregateInput
  }

  export type CitaScalarWhereWithAggregatesInput = {
    AND?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    OR?: CitaScalarWhereWithAggregatesInput[]
    NOT?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cita"> | string
    fecha?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    hora?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    pacienteId?: StringWithAggregatesFilter<"Cita"> | string
    medicoId?: StringWithAggregatesFilter<"Cita"> | string
    sintomas?: StringNullableWithAggregatesFilter<"Cita"> | string | null
    notas?: StringNullableWithAggregatesFilter<"Cita"> | string | null
    tipo?: EnumTipoCitaWithAggregatesFilter<"Cita"> | $Enums.TipoCita
    estado?: EnumEstadoCitaWithAggregatesFilter<"Cita"> | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaWithAggregatesFilter<"Cita"> | $Enums.PrioridadCita
    fechaCreacion?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    fechaActualizacion?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
  }

  export type HistoriaClinicaWhereInput = {
    AND?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    OR?: HistoriaClinicaWhereInput[]
    NOT?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    id?: StringFilter<"HistoriaClinica"> | string
    pacienteId?: StringFilter<"HistoriaClinica"> | string
    medicoId?: StringFilter<"HistoriaClinica"> | string
    fecha?: DateTimeFilter<"HistoriaClinica"> | Date | string
    diagnostico?: StringFilter<"HistoriaClinica"> | string
    sintomas?: StringNullableFilter<"HistoriaClinica"> | string | null
    tratamiento?: StringNullableFilter<"HistoriaClinica"> | string | null
    medicamentos?: StringNullableFilter<"HistoriaClinica"> | string | null
    alergias?: StringNullableFilter<"HistoriaClinica"> | string | null
    signosVitales?: StringNullableFilter<"HistoriaClinica"> | string | null
    observaciones?: StringNullableFilter<"HistoriaClinica"> | string | null
    proximaRevision?: DateTimeNullableFilter<"HistoriaClinica"> | Date | string | null
    estado?: StringFilter<"HistoriaClinica"> | string
    fechaActualizacion?: DateTimeFilter<"HistoriaClinica"> | Date | string
    paciente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }

  export type HistoriaClinicaOrderByWithRelationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    fecha?: SortOrder
    diagnostico?: SortOrder
    sintomas?: SortOrderInput | SortOrder
    tratamiento?: SortOrderInput | SortOrder
    medicamentos?: SortOrderInput | SortOrder
    alergias?: SortOrderInput | SortOrder
    signosVitales?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    proximaRevision?: SortOrderInput | SortOrder
    estado?: SortOrder
    fechaActualizacion?: SortOrder
    paciente?: UsuarioOrderByWithRelationInput
    medico?: MedicoOrderByWithRelationInput
    _relevance?: HistoriaClinicaOrderByRelevanceInput
  }

  export type HistoriaClinicaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    OR?: HistoriaClinicaWhereInput[]
    NOT?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    pacienteId?: StringFilter<"HistoriaClinica"> | string
    medicoId?: StringFilter<"HistoriaClinica"> | string
    fecha?: DateTimeFilter<"HistoriaClinica"> | Date | string
    diagnostico?: StringFilter<"HistoriaClinica"> | string
    sintomas?: StringNullableFilter<"HistoriaClinica"> | string | null
    tratamiento?: StringNullableFilter<"HistoriaClinica"> | string | null
    medicamentos?: StringNullableFilter<"HistoriaClinica"> | string | null
    alergias?: StringNullableFilter<"HistoriaClinica"> | string | null
    signosVitales?: StringNullableFilter<"HistoriaClinica"> | string | null
    observaciones?: StringNullableFilter<"HistoriaClinica"> | string | null
    proximaRevision?: DateTimeNullableFilter<"HistoriaClinica"> | Date | string | null
    estado?: StringFilter<"HistoriaClinica"> | string
    fechaActualizacion?: DateTimeFilter<"HistoriaClinica"> | Date | string
    paciente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }, "id">

  export type HistoriaClinicaOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    fecha?: SortOrder
    diagnostico?: SortOrder
    sintomas?: SortOrderInput | SortOrder
    tratamiento?: SortOrderInput | SortOrder
    medicamentos?: SortOrderInput | SortOrder
    alergias?: SortOrderInput | SortOrder
    signosVitales?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    proximaRevision?: SortOrderInput | SortOrder
    estado?: SortOrder
    fechaActualizacion?: SortOrder
    _count?: HistoriaClinicaCountOrderByAggregateInput
    _max?: HistoriaClinicaMaxOrderByAggregateInput
    _min?: HistoriaClinicaMinOrderByAggregateInput
  }

  export type HistoriaClinicaScalarWhereWithAggregatesInput = {
    AND?: HistoriaClinicaScalarWhereWithAggregatesInput | HistoriaClinicaScalarWhereWithAggregatesInput[]
    OR?: HistoriaClinicaScalarWhereWithAggregatesInput[]
    NOT?: HistoriaClinicaScalarWhereWithAggregatesInput | HistoriaClinicaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoriaClinica"> | string
    pacienteId?: StringWithAggregatesFilter<"HistoriaClinica"> | string
    medicoId?: StringWithAggregatesFilter<"HistoriaClinica"> | string
    fecha?: DateTimeWithAggregatesFilter<"HistoriaClinica"> | Date | string
    diagnostico?: StringWithAggregatesFilter<"HistoriaClinica"> | string
    sintomas?: StringNullableWithAggregatesFilter<"HistoriaClinica"> | string | null
    tratamiento?: StringNullableWithAggregatesFilter<"HistoriaClinica"> | string | null
    medicamentos?: StringNullableWithAggregatesFilter<"HistoriaClinica"> | string | null
    alergias?: StringNullableWithAggregatesFilter<"HistoriaClinica"> | string | null
    signosVitales?: StringNullableWithAggregatesFilter<"HistoriaClinica"> | string | null
    observaciones?: StringNullableWithAggregatesFilter<"HistoriaClinica"> | string | null
    proximaRevision?: DateTimeNullableWithAggregatesFilter<"HistoriaClinica"> | Date | string | null
    estado?: StringWithAggregatesFilter<"HistoriaClinica"> | string
    fechaActualizacion?: DateTimeWithAggregatesFilter<"HistoriaClinica"> | Date | string
  }

  export type ConversacionWhereInput = {
    AND?: ConversacionWhereInput | ConversacionWhereInput[]
    OR?: ConversacionWhereInput[]
    NOT?: ConversacionWhereInput | ConversacionWhereInput[]
    id?: StringFilter<"Conversacion"> | string
    pacienteId?: StringFilter<"Conversacion"> | string
    medicoId?: StringFilter<"Conversacion"> | string
    asunto?: StringNullableFilter<"Conversacion"> | string | null
    estado?: StringFilter<"Conversacion"> | string
    fechaCreacion?: DateTimeFilter<"Conversacion"> | Date | string
    ultimaActividad?: DateTimeFilter<"Conversacion"> | Date | string
    paciente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    mensajes?: MensajeListRelationFilter
  }

  export type ConversacionOrderByWithRelationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    asunto?: SortOrderInput | SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    ultimaActividad?: SortOrder
    paciente?: UsuarioOrderByWithRelationInput
    medico?: MedicoOrderByWithRelationInput
    mensajes?: MensajeOrderByRelationAggregateInput
    _relevance?: ConversacionOrderByRelevanceInput
  }

  export type ConversacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversacionWhereInput | ConversacionWhereInput[]
    OR?: ConversacionWhereInput[]
    NOT?: ConversacionWhereInput | ConversacionWhereInput[]
    pacienteId?: StringFilter<"Conversacion"> | string
    medicoId?: StringFilter<"Conversacion"> | string
    asunto?: StringNullableFilter<"Conversacion"> | string | null
    estado?: StringFilter<"Conversacion"> | string
    fechaCreacion?: DateTimeFilter<"Conversacion"> | Date | string
    ultimaActividad?: DateTimeFilter<"Conversacion"> | Date | string
    paciente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    mensajes?: MensajeListRelationFilter
  }, "id">

  export type ConversacionOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    asunto?: SortOrderInput | SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    ultimaActividad?: SortOrder
    _count?: ConversacionCountOrderByAggregateInput
    _max?: ConversacionMaxOrderByAggregateInput
    _min?: ConversacionMinOrderByAggregateInput
  }

  export type ConversacionScalarWhereWithAggregatesInput = {
    AND?: ConversacionScalarWhereWithAggregatesInput | ConversacionScalarWhereWithAggregatesInput[]
    OR?: ConversacionScalarWhereWithAggregatesInput[]
    NOT?: ConversacionScalarWhereWithAggregatesInput | ConversacionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversacion"> | string
    pacienteId?: StringWithAggregatesFilter<"Conversacion"> | string
    medicoId?: StringWithAggregatesFilter<"Conversacion"> | string
    asunto?: StringNullableWithAggregatesFilter<"Conversacion"> | string | null
    estado?: StringWithAggregatesFilter<"Conversacion"> | string
    fechaCreacion?: DateTimeWithAggregatesFilter<"Conversacion"> | Date | string
    ultimaActividad?: DateTimeWithAggregatesFilter<"Conversacion"> | Date | string
  }

  export type MensajeWhereInput = {
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    id?: StringFilter<"Mensaje"> | string
    conversacionId?: StringFilter<"Mensaje"> | string
    remitenteId?: StringFilter<"Mensaje"> | string
    destinatarioId?: StringFilter<"Mensaje"> | string
    contenido?: StringFilter<"Mensaje"> | string
    fecha?: DateTimeFilter<"Mensaje"> | Date | string
    leido?: BoolFilter<"Mensaje"> | boolean
    tipoRemitente?: StringFilter<"Mensaje"> | string
    conversacion?: XOR<ConversacionScalarRelationFilter, ConversacionWhereInput>
    remitente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    destinatario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type MensajeOrderByWithRelationInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    leido?: SortOrder
    tipoRemitente?: SortOrder
    conversacion?: ConversacionOrderByWithRelationInput
    remitente?: UsuarioOrderByWithRelationInput
    destinatario?: UsuarioOrderByWithRelationInput
    _relevance?: MensajeOrderByRelevanceInput
  }

  export type MensajeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MensajeWhereInput | MensajeWhereInput[]
    OR?: MensajeWhereInput[]
    NOT?: MensajeWhereInput | MensajeWhereInput[]
    conversacionId?: StringFilter<"Mensaje"> | string
    remitenteId?: StringFilter<"Mensaje"> | string
    destinatarioId?: StringFilter<"Mensaje"> | string
    contenido?: StringFilter<"Mensaje"> | string
    fecha?: DateTimeFilter<"Mensaje"> | Date | string
    leido?: BoolFilter<"Mensaje"> | boolean
    tipoRemitente?: StringFilter<"Mensaje"> | string
    conversacion?: XOR<ConversacionScalarRelationFilter, ConversacionWhereInput>
    remitente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    destinatario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type MensajeOrderByWithAggregationInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    leido?: SortOrder
    tipoRemitente?: SortOrder
    _count?: MensajeCountOrderByAggregateInput
    _max?: MensajeMaxOrderByAggregateInput
    _min?: MensajeMinOrderByAggregateInput
  }

  export type MensajeScalarWhereWithAggregatesInput = {
    AND?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    OR?: MensajeScalarWhereWithAggregatesInput[]
    NOT?: MensajeScalarWhereWithAggregatesInput | MensajeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mensaje"> | string
    conversacionId?: StringWithAggregatesFilter<"Mensaje"> | string
    remitenteId?: StringWithAggregatesFilter<"Mensaje"> | string
    destinatarioId?: StringWithAggregatesFilter<"Mensaje"> | string
    contenido?: StringWithAggregatesFilter<"Mensaje"> | string
    fecha?: DateTimeWithAggregatesFilter<"Mensaje"> | Date | string
    leido?: BoolWithAggregatesFilter<"Mensaje"> | boolean
    tipoRemitente?: StringWithAggregatesFilter<"Mensaje"> | string
  }

  export type AuditoriaWhereInput = {
    AND?: AuditoriaWhereInput | AuditoriaWhereInput[]
    OR?: AuditoriaWhereInput[]
    NOT?: AuditoriaWhereInput | AuditoriaWhereInput[]
    id?: StringFilter<"Auditoria"> | string
    usuarioId?: StringFilter<"Auditoria"> | string
    fecha?: DateTimeFilter<"Auditoria"> | Date | string
    accion?: StringFilter<"Auditoria"> | string
    detalles?: StringNullableFilter<"Auditoria"> | string | null
    ip?: StringNullableFilter<"Auditoria"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AuditoriaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
    detalles?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: AuditoriaOrderByRelevanceInput
  }

  export type AuditoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditoriaWhereInput | AuditoriaWhereInput[]
    OR?: AuditoriaWhereInput[]
    NOT?: AuditoriaWhereInput | AuditoriaWhereInput[]
    usuarioId?: StringFilter<"Auditoria"> | string
    fecha?: DateTimeFilter<"Auditoria"> | Date | string
    accion?: StringFilter<"Auditoria"> | string
    detalles?: StringNullableFilter<"Auditoria"> | string | null
    ip?: StringNullableFilter<"Auditoria"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type AuditoriaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
    detalles?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    _count?: AuditoriaCountOrderByAggregateInput
    _max?: AuditoriaMaxOrderByAggregateInput
    _min?: AuditoriaMinOrderByAggregateInput
  }

  export type AuditoriaScalarWhereWithAggregatesInput = {
    AND?: AuditoriaScalarWhereWithAggregatesInput | AuditoriaScalarWhereWithAggregatesInput[]
    OR?: AuditoriaScalarWhereWithAggregatesInput[]
    NOT?: AuditoriaScalarWhereWithAggregatesInput | AuditoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auditoria"> | string
    usuarioId?: StringWithAggregatesFilter<"Auditoria"> | string
    fecha?: DateTimeWithAggregatesFilter<"Auditoria"> | Date | string
    accion?: StringWithAggregatesFilter<"Auditoria"> | string
    detalles?: StringNullableWithAggregatesFilter<"Auditoria"> | string | null
    ip?: StringNullableWithAggregatesFilter<"Auditoria"> | string | null
  }

  export type UsuarioCreateInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPacienteNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EspecialidadCreateInput = {
    id?: string
    nombre: string
    activa?: boolean
    medicos?: MedicoCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUncheckedCreateInput = {
    id?: string
    nombre: string
    activa?: boolean
    medicos?: MedicoUncheckedCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    medicos?: MedicoUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
    medicos?: MedicoUncheckedUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadCreateManyInput = {
    id?: string
    nombre: string
    activa?: boolean
  }

  export type EspecialidadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EspecialidadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicoCreateInput = {
    id?: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    citas?: CitaCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
    conversaciones?: ConversacionCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateInput = {
    id?: string
    usuarioId: string
    especialidadId: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    citas?: CitaUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
    conversaciones?: ConversacionUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    especialidadId?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoCreateManyInput = {
    id?: string
    usuarioId: string
    especialidadId: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
  }

  export type MedicoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    especialidadId?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitaCreateInput = {
    id?: string
    fecha: Date | string
    hora: Date | string
    sintomas?: string | null
    notas?: string | null
    tipo?: $Enums.TipoCita
    estado?: $Enums.EstadoCita
    prioridad?: $Enums.PrioridadCita
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    paciente: UsuarioCreateNestedOneWithoutCitasInput
    medico: MedicoCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateInput = {
    id?: string
    fecha: Date | string
    hora: Date | string
    pacienteId: string
    medicoId: string
    sintomas?: string | null
    notas?: string | null
    tipo?: $Enums.TipoCita
    estado?: $Enums.EstadoCita
    prioridad?: $Enums.PrioridadCita
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type CitaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoCitaFieldUpdateOperationsInput | $Enums.TipoCita
    estado?: EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFieldUpdateOperationsInput | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: UsuarioUpdateOneRequiredWithoutCitasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    medicoId?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoCitaFieldUpdateOperationsInput | $Enums.TipoCita
    estado?: EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFieldUpdateOperationsInput | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaCreateManyInput = {
    id?: string
    fecha: Date | string
    hora: Date | string
    pacienteId: string
    medicoId: string
    sintomas?: string | null
    notas?: string | null
    tipo?: $Enums.TipoCita
    estado?: $Enums.EstadoCita
    prioridad?: $Enums.PrioridadCita
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type CitaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoCitaFieldUpdateOperationsInput | $Enums.TipoCita
    estado?: EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFieldUpdateOperationsInput | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    medicoId?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoCitaFieldUpdateOperationsInput | $Enums.TipoCita
    estado?: EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFieldUpdateOperationsInput | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriaClinicaCreateInput = {
    id?: string
    fecha?: Date | string
    diagnostico: string
    sintomas?: string | null
    tratamiento?: string | null
    medicamentos?: string | null
    alergias?: string | null
    signosVitales?: string | null
    observaciones?: string | null
    proximaRevision?: Date | string | null
    estado?: string
    fechaActualizacion?: Date | string
    paciente: UsuarioCreateNestedOneWithoutHistoriasInput
    medico: MedicoCreateNestedOneWithoutHistoriasInput
  }

  export type HistoriaClinicaUncheckedCreateInput = {
    id?: string
    pacienteId: string
    medicoId: string
    fecha?: Date | string
    diagnostico: string
    sintomas?: string | null
    tratamiento?: string | null
    medicamentos?: string | null
    alergias?: string | null
    signosVitales?: string | null
    observaciones?: string | null
    proximaRevision?: Date | string | null
    estado?: string
    fechaActualizacion?: Date | string
  }

  export type HistoriaClinicaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    medicamentos?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: NullableStringFieldUpdateOperationsInput | string | null
    signosVitales?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    proximaRevision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: UsuarioUpdateOneRequiredWithoutHistoriasNestedInput
    medico?: MedicoUpdateOneRequiredWithoutHistoriasNestedInput
  }

  export type HistoriaClinicaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    medicoId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    medicamentos?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: NullableStringFieldUpdateOperationsInput | string | null
    signosVitales?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    proximaRevision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriaClinicaCreateManyInput = {
    id?: string
    pacienteId: string
    medicoId: string
    fecha?: Date | string
    diagnostico: string
    sintomas?: string | null
    tratamiento?: string | null
    medicamentos?: string | null
    alergias?: string | null
    signosVitales?: string | null
    observaciones?: string | null
    proximaRevision?: Date | string | null
    estado?: string
    fechaActualizacion?: Date | string
  }

  export type HistoriaClinicaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    medicamentos?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: NullableStringFieldUpdateOperationsInput | string | null
    signosVitales?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    proximaRevision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriaClinicaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    medicoId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    medicamentos?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: NullableStringFieldUpdateOperationsInput | string | null
    signosVitales?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    proximaRevision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversacionCreateInput = {
    id?: string
    asunto?: string | null
    estado?: string
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string
    paciente: UsuarioCreateNestedOneWithoutConversacionesInput
    medico: MedicoCreateNestedOneWithoutConversacionesInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateInput = {
    id?: string
    pacienteId: string
    medicoId: string
    asunto?: string | null
    estado?: string
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: UsuarioUpdateOneRequiredWithoutConversacionesNestedInput
    medico?: MedicoUpdateOneRequiredWithoutConversacionesNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    medicoId?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionCreateManyInput = {
    id?: string
    pacienteId: string
    medicoId: string
    asunto?: string | null
    estado?: string
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string
  }

  export type ConversacionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversacionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    medicoId?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateInput = {
    id?: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
    conversacion: ConversacionCreateNestedOneWithoutMensajesInput
    remitente: UsuarioCreateNestedOneWithoutMensajesEnviadosInput
    destinatario: UsuarioCreateNestedOneWithoutMensajesRecibidosInput
  }

  export type MensajeUncheckedCreateInput = {
    id?: string
    conversacionId: string
    remitenteId: string
    destinatarioId: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
  }

  export type MensajeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
    conversacion?: ConversacionUpdateOneRequiredWithoutMensajesNestedInput
    remitente?: UsuarioUpdateOneRequiredWithoutMensajesEnviadosNestedInput
    destinatario?: UsuarioUpdateOneRequiredWithoutMensajesRecibidosNestedInput
  }

  export type MensajeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversacionId?: StringFieldUpdateOperationsInput | string
    remitenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeCreateManyInput = {
    id?: string
    conversacionId: string
    remitenteId: string
    destinatarioId: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
  }

  export type MensajeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversacionId?: StringFieldUpdateOperationsInput | string
    remitenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
  }

  export type AuditoriaCreateInput = {
    id?: string
    fecha?: Date | string
    accion: string
    detalles?: string | null
    ip?: string | null
    usuario: UsuarioCreateNestedOneWithoutAuditoriasInput
  }

  export type AuditoriaUncheckedCreateInput = {
    id?: string
    usuarioId: string
    fecha?: Date | string
    accion: string
    detalles?: string | null
    ip?: string | null
  }

  export type AuditoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    detalles?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutAuditoriasNestedInput
  }

  export type AuditoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    detalles?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditoriaCreateManyInput = {
    id?: string
    usuarioId: string
    fecha?: Date | string
    accion: string
    detalles?: string | null
    ip?: string | null
  }

  export type AuditoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    detalles?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    detalles?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ConversacionListRelationFilter = {
    every?: ConversacionWhereInput
    some?: ConversacionWhereInput
    none?: ConversacionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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

  export type ConversacionOrderByRelationAggregateInput = {
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
    telefono?: SortOrder
    fechaNacimiento?: SortOrder
    fechaCreacion?: SortOrder
    ultimaActividad?: SortOrder
    activo?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    telefono?: SortOrder
    fechaNacimiento?: SortOrder
    fechaCreacion?: SortOrder
    ultimaActividad?: SortOrder
    activo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    telefono?: SortOrder
    fechaNacimiento?: SortOrder
    fechaCreacion?: SortOrder
    ultimaActividad?: SortOrder
    activo?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    activa?: SortOrder
  }

  export type EspecialidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    activa?: SortOrder
  }

  export type EspecialidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    activa?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EspecialidadScalarRelationFilter = {
    is?: EspecialidadWhereInput
    isNot?: EspecialidadWhereInput
  }

  export type MedicoOrderByRelevanceInput = {
    fields: MedicoOrderByRelevanceFieldEnum | MedicoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MedicoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    licencia?: SortOrder
    horarioInicio?: SortOrder
    horarioFin?: SortOrder
  }

  export type MedicoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    licencia?: SortOrder
    horarioInicio?: SortOrder
    horarioFin?: SortOrder
  }

  export type MedicoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    especialidadId?: SortOrder
    licencia?: SortOrder
    horarioInicio?: SortOrder
    horarioFin?: SortOrder
  }

  export type EnumTipoCitaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCita | EnumTipoCitaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCita[]
    notIn?: $Enums.TipoCita[]
    not?: NestedEnumTipoCitaFilter<$PrismaModel> | $Enums.TipoCita
  }

  export type EnumEstadoCitaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCita | EnumEstadoCitaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCita[]
    notIn?: $Enums.EstadoCita[]
    not?: NestedEnumEstadoCitaFilter<$PrismaModel> | $Enums.EstadoCita
  }

  export type EnumPrioridadCitaFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioridadCita | EnumPrioridadCitaFieldRefInput<$PrismaModel>
    in?: $Enums.PrioridadCita[]
    notIn?: $Enums.PrioridadCita[]
    not?: NestedEnumPrioridadCitaFilter<$PrismaModel> | $Enums.PrioridadCita
  }

  export type MedicoScalarRelationFilter = {
    is?: MedicoWhereInput
    isNot?: MedicoWhereInput
  }

  export type CitaOrderByRelevanceInput = {
    fields: CitaOrderByRelevanceFieldEnum | CitaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CitaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    sintomas?: SortOrder
    notas?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type CitaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    sintomas?: SortOrder
    notas?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type CitaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    sintomas?: SortOrder
    notas?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type EnumTipoCitaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCita | EnumTipoCitaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCita[]
    notIn?: $Enums.TipoCita[]
    not?: NestedEnumTipoCitaWithAggregatesFilter<$PrismaModel> | $Enums.TipoCita
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCitaFilter<$PrismaModel>
    _max?: NestedEnumTipoCitaFilter<$PrismaModel>
  }

  export type EnumEstadoCitaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCita | EnumEstadoCitaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCita[]
    notIn?: $Enums.EstadoCita[]
    not?: NestedEnumEstadoCitaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCita
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCitaFilter<$PrismaModel>
    _max?: NestedEnumEstadoCitaFilter<$PrismaModel>
  }

  export type EnumPrioridadCitaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioridadCita | EnumPrioridadCitaFieldRefInput<$PrismaModel>
    in?: $Enums.PrioridadCita[]
    notIn?: $Enums.PrioridadCita[]
    not?: NestedEnumPrioridadCitaWithAggregatesFilter<$PrismaModel> | $Enums.PrioridadCita
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadCitaFilter<$PrismaModel>
    _max?: NestedEnumPrioridadCitaFilter<$PrismaModel>
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
    diagnostico?: SortOrder
    sintomas?: SortOrder
    tratamiento?: SortOrder
    medicamentos?: SortOrder
    alergias?: SortOrder
    signosVitales?: SortOrder
    observaciones?: SortOrder
    proximaRevision?: SortOrder
    estado?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type HistoriaClinicaMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    fecha?: SortOrder
    diagnostico?: SortOrder
    sintomas?: SortOrder
    tratamiento?: SortOrder
    medicamentos?: SortOrder
    alergias?: SortOrder
    signosVitales?: SortOrder
    observaciones?: SortOrder
    proximaRevision?: SortOrder
    estado?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type HistoriaClinicaMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    fecha?: SortOrder
    diagnostico?: SortOrder
    sintomas?: SortOrder
    tratamiento?: SortOrder
    medicamentos?: SortOrder
    alergias?: SortOrder
    signosVitales?: SortOrder
    observaciones?: SortOrder
    proximaRevision?: SortOrder
    estado?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type ConversacionOrderByRelevanceInput = {
    fields: ConversacionOrderByRelevanceFieldEnum | ConversacionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ConversacionCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    asunto?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    ultimaActividad?: SortOrder
  }

  export type ConversacionMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    asunto?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    ultimaActividad?: SortOrder
  }

  export type ConversacionMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    medicoId?: SortOrder
    asunto?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    ultimaActividad?: SortOrder
  }

  export type ConversacionScalarRelationFilter = {
    is?: ConversacionWhereInput
    isNot?: ConversacionWhereInput
  }

  export type MensajeOrderByRelevanceInput = {
    fields: MensajeOrderByRelevanceFieldEnum | MensajeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MensajeCountOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    leido?: SortOrder
    tipoRemitente?: SortOrder
  }

  export type MensajeMaxOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    leido?: SortOrder
    tipoRemitente?: SortOrder
  }

  export type MensajeMinOrderByAggregateInput = {
    id?: SortOrder
    conversacionId?: SortOrder
    remitenteId?: SortOrder
    destinatarioId?: SortOrder
    contenido?: SortOrder
    fecha?: SortOrder
    leido?: SortOrder
    tipoRemitente?: SortOrder
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
    detalles?: SortOrder
    ip?: SortOrder
  }

  export type AuditoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
    detalles?: SortOrder
    ip?: SortOrder
  }

  export type AuditoriaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
    detalles?: SortOrder
    ip?: SortOrder
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

  export type ConversacionCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConversacionCreateWithoutPacienteInput, ConversacionUncheckedCreateWithoutPacienteInput> | ConversacionCreateWithoutPacienteInput[] | ConversacionUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPacienteInput | ConversacionCreateOrConnectWithoutPacienteInput[]
    createMany?: ConversacionCreateManyPacienteInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
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

  export type ConversacionUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConversacionCreateWithoutPacienteInput, ConversacionUncheckedCreateWithoutPacienteInput> | ConversacionCreateWithoutPacienteInput[] | ConversacionUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPacienteInput | ConversacionCreateOrConnectWithoutPacienteInput[]
    createMany?: ConversacionCreateManyPacienteInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type ConversacionUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConversacionCreateWithoutPacienteInput, ConversacionUncheckedCreateWithoutPacienteInput> | ConversacionCreateWithoutPacienteInput[] | ConversacionUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPacienteInput | ConversacionCreateOrConnectWithoutPacienteInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutPacienteInput | ConversacionUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConversacionCreateManyPacienteInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutPacienteInput | ConversacionUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutPacienteInput | ConversacionUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
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

  export type ConversacionUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConversacionCreateWithoutPacienteInput, ConversacionUncheckedCreateWithoutPacienteInput> | ConversacionCreateWithoutPacienteInput[] | ConversacionUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutPacienteInput | ConversacionCreateOrConnectWithoutPacienteInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutPacienteInput | ConversacionUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConversacionCreateManyPacienteInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutPacienteInput | ConversacionUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutPacienteInput | ConversacionUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
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

  export type ConversacionCreateNestedManyWithoutMedicoInput = {
    create?: XOR<ConversacionCreateWithoutMedicoInput, ConversacionUncheckedCreateWithoutMedicoInput> | ConversacionCreateWithoutMedicoInput[] | ConversacionUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutMedicoInput | ConversacionCreateOrConnectWithoutMedicoInput[]
    createMany?: ConversacionCreateManyMedicoInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
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

  export type ConversacionUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<ConversacionCreateWithoutMedicoInput, ConversacionUncheckedCreateWithoutMedicoInput> | ConversacionCreateWithoutMedicoInput[] | ConversacionUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutMedicoInput | ConversacionCreateOrConnectWithoutMedicoInput[]
    createMany?: ConversacionCreateManyMedicoInputEnvelope
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
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

  export type ConversacionUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<ConversacionCreateWithoutMedicoInput, ConversacionUncheckedCreateWithoutMedicoInput> | ConversacionCreateWithoutMedicoInput[] | ConversacionUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutMedicoInput | ConversacionCreateOrConnectWithoutMedicoInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutMedicoInput | ConversacionUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: ConversacionCreateManyMedicoInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutMedicoInput | ConversacionUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutMedicoInput | ConversacionUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
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

  export type ConversacionUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<ConversacionCreateWithoutMedicoInput, ConversacionUncheckedCreateWithoutMedicoInput> | ConversacionCreateWithoutMedicoInput[] | ConversacionUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: ConversacionCreateOrConnectWithoutMedicoInput | ConversacionCreateOrConnectWithoutMedicoInput[]
    upsert?: ConversacionUpsertWithWhereUniqueWithoutMedicoInput | ConversacionUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: ConversacionCreateManyMedicoInputEnvelope
    set?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    disconnect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    delete?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    connect?: ConversacionWhereUniqueInput | ConversacionWhereUniqueInput[]
    update?: ConversacionUpdateWithWhereUniqueWithoutMedicoInput | ConversacionUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: ConversacionUpdateManyWithWhereWithoutMedicoInput | ConversacionUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
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

  export type EnumTipoCitaFieldUpdateOperationsInput = {
    set?: $Enums.TipoCita
  }

  export type EnumEstadoCitaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoCita
  }

  export type EnumPrioridadCitaFieldUpdateOperationsInput = {
    set?: $Enums.PrioridadCita
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

  export type UsuarioCreateNestedOneWithoutConversacionesInput = {
    create?: XOR<UsuarioCreateWithoutConversacionesInput, UsuarioUncheckedCreateWithoutConversacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConversacionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MedicoCreateNestedOneWithoutConversacionesInput = {
    create?: XOR<MedicoCreateWithoutConversacionesInput, MedicoUncheckedCreateWithoutConversacionesInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutConversacionesInput
    connect?: MedicoWhereUniqueInput
  }

  export type MensajeCreateNestedManyWithoutConversacionInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type MensajeUncheckedCreateNestedManyWithoutConversacionInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutConversacionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutConversacionesInput, UsuarioUncheckedCreateWithoutConversacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConversacionesInput
    upsert?: UsuarioUpsertWithoutConversacionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutConversacionesInput, UsuarioUpdateWithoutConversacionesInput>, UsuarioUncheckedUpdateWithoutConversacionesInput>
  }

  export type MedicoUpdateOneRequiredWithoutConversacionesNestedInput = {
    create?: XOR<MedicoCreateWithoutConversacionesInput, MedicoUncheckedCreateWithoutConversacionesInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutConversacionesInput
    upsert?: MedicoUpsertWithoutConversacionesInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutConversacionesInput, MedicoUpdateWithoutConversacionesInput>, MedicoUncheckedUpdateWithoutConversacionesInput>
  }

  export type MensajeUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutConversacionInput | MensajeUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutConversacionInput | MensajeUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutConversacionInput | MensajeUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type MensajeUncheckedUpdateManyWithoutConversacionNestedInput = {
    create?: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput> | MensajeCreateWithoutConversacionInput[] | MensajeUncheckedCreateWithoutConversacionInput[]
    connectOrCreate?: MensajeCreateOrConnectWithoutConversacionInput | MensajeCreateOrConnectWithoutConversacionInput[]
    upsert?: MensajeUpsertWithWhereUniqueWithoutConversacionInput | MensajeUpsertWithWhereUniqueWithoutConversacionInput[]
    createMany?: MensajeCreateManyConversacionInputEnvelope
    set?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    disconnect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    delete?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    connect?: MensajeWhereUniqueInput | MensajeWhereUniqueInput[]
    update?: MensajeUpdateWithWhereUniqueWithoutConversacionInput | MensajeUpdateWithWhereUniqueWithoutConversacionInput[]
    updateMany?: MensajeUpdateManyWithWhereWithoutConversacionInput | MensajeUpdateManyWithWhereWithoutConversacionInput[]
    deleteMany?: MensajeScalarWhereInput | MensajeScalarWhereInput[]
  }

  export type ConversacionCreateNestedOneWithoutMensajesInput = {
    create?: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutMensajesInput
    connect?: ConversacionWhereUniqueInput
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

  export type ConversacionUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: ConversacionCreateOrConnectWithoutMensajesInput
    upsert?: ConversacionUpsertWithoutMensajesInput
    connect?: ConversacionWhereUniqueInput
    update?: XOR<XOR<ConversacionUpdateToOneWithWhereWithoutMensajesInput, ConversacionUpdateWithoutMensajesInput>, ConversacionUncheckedUpdateWithoutMensajesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTipoCitaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCita | EnumTipoCitaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCita[]
    notIn?: $Enums.TipoCita[]
    not?: NestedEnumTipoCitaFilter<$PrismaModel> | $Enums.TipoCita
  }

  export type NestedEnumEstadoCitaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCita | EnumEstadoCitaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCita[]
    notIn?: $Enums.EstadoCita[]
    not?: NestedEnumEstadoCitaFilter<$PrismaModel> | $Enums.EstadoCita
  }

  export type NestedEnumPrioridadCitaFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioridadCita | EnumPrioridadCitaFieldRefInput<$PrismaModel>
    in?: $Enums.PrioridadCita[]
    notIn?: $Enums.PrioridadCita[]
    not?: NestedEnumPrioridadCitaFilter<$PrismaModel> | $Enums.PrioridadCita
  }

  export type NestedEnumTipoCitaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCita | EnumTipoCitaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCita[]
    notIn?: $Enums.TipoCita[]
    not?: NestedEnumTipoCitaWithAggregatesFilter<$PrismaModel> | $Enums.TipoCita
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCitaFilter<$PrismaModel>
    _max?: NestedEnumTipoCitaFilter<$PrismaModel>
  }

  export type NestedEnumEstadoCitaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCita | EnumEstadoCitaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCita[]
    notIn?: $Enums.EstadoCita[]
    not?: NestedEnumEstadoCitaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCita
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCitaFilter<$PrismaModel>
    _max?: NestedEnumEstadoCitaFilter<$PrismaModel>
  }

  export type NestedEnumPrioridadCitaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioridadCita | EnumPrioridadCitaFieldRefInput<$PrismaModel>
    in?: $Enums.PrioridadCita[]
    notIn?: $Enums.PrioridadCita[]
    not?: NestedEnumPrioridadCitaWithAggregatesFilter<$PrismaModel> | $Enums.PrioridadCita
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadCitaFilter<$PrismaModel>
    _max?: NestedEnumPrioridadCitaFilter<$PrismaModel>
  }

  export type MedicoCreateWithoutUsuarioInput = {
    id?: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    citas?: CitaCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
    conversaciones?: ConversacionCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    especialidadId: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutUsuarioInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
  }

  export type CitaCreateWithoutPacienteInput = {
    id?: string
    fecha: Date | string
    hora: Date | string
    sintomas?: string | null
    notas?: string | null
    tipo?: $Enums.TipoCita
    estado?: $Enums.EstadoCita
    prioridad?: $Enums.PrioridadCita
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    medico: MedicoCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutPacienteInput = {
    id?: string
    fecha: Date | string
    hora: Date | string
    medicoId: string
    sintomas?: string | null
    notas?: string | null
    tipo?: $Enums.TipoCita
    estado?: $Enums.EstadoCita
    prioridad?: $Enums.PrioridadCita
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
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
    id?: string
    fecha?: Date | string
    diagnostico: string
    sintomas?: string | null
    tratamiento?: string | null
    medicamentos?: string | null
    alergias?: string | null
    signosVitales?: string | null
    observaciones?: string | null
    proximaRevision?: Date | string | null
    estado?: string
    fechaActualizacion?: Date | string
    medico: MedicoCreateNestedOneWithoutHistoriasInput
  }

  export type HistoriaClinicaUncheckedCreateWithoutPacienteInput = {
    id?: string
    medicoId: string
    fecha?: Date | string
    diagnostico: string
    sintomas?: string | null
    tratamiento?: string | null
    medicamentos?: string | null
    alergias?: string | null
    signosVitales?: string | null
    observaciones?: string | null
    proximaRevision?: Date | string | null
    estado?: string
    fechaActualizacion?: Date | string
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
    id?: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
    conversacion: ConversacionCreateNestedOneWithoutMensajesInput
    destinatario: UsuarioCreateNestedOneWithoutMensajesRecibidosInput
  }

  export type MensajeUncheckedCreateWithoutRemitenteInput = {
    id?: string
    conversacionId: string
    destinatarioId: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
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
    id?: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
    conversacion: ConversacionCreateNestedOneWithoutMensajesInput
    remitente: UsuarioCreateNestedOneWithoutMensajesEnviadosInput
  }

  export type MensajeUncheckedCreateWithoutDestinatarioInput = {
    id?: string
    conversacionId: string
    remitenteId: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
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
    id?: string
    fecha?: Date | string
    accion: string
    detalles?: string | null
    ip?: string | null
  }

  export type AuditoriaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    fecha?: Date | string
    accion: string
    detalles?: string | null
    ip?: string | null
  }

  export type AuditoriaCreateOrConnectWithoutUsuarioInput = {
    where: AuditoriaWhereUniqueInput
    create: XOR<AuditoriaCreateWithoutUsuarioInput, AuditoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type AuditoriaCreateManyUsuarioInputEnvelope = {
    data: AuditoriaCreateManyUsuarioInput | AuditoriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ConversacionCreateWithoutPacienteInput = {
    id?: string
    asunto?: string | null
    estado?: string
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string
    medico: MedicoCreateNestedOneWithoutConversacionesInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutPacienteInput = {
    id?: string
    medicoId: string
    asunto?: string | null
    estado?: string
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutPacienteInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutPacienteInput, ConversacionUncheckedCreateWithoutPacienteInput>
  }

  export type ConversacionCreateManyPacienteInputEnvelope = {
    data: ConversacionCreateManyPacienteInput | ConversacionCreateManyPacienteInput[]
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
    id?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    citas?: CitaUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
    conversaciones?: ConversacionUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    especialidadId?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutMedicoNestedInput
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
    id?: StringFilter<"Cita"> | string
    fecha?: DateTimeFilter<"Cita"> | Date | string
    hora?: DateTimeFilter<"Cita"> | Date | string
    pacienteId?: StringFilter<"Cita"> | string
    medicoId?: StringFilter<"Cita"> | string
    sintomas?: StringNullableFilter<"Cita"> | string | null
    notas?: StringNullableFilter<"Cita"> | string | null
    tipo?: EnumTipoCitaFilter<"Cita"> | $Enums.TipoCita
    estado?: EnumEstadoCitaFilter<"Cita"> | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFilter<"Cita"> | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFilter<"Cita"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Cita"> | Date | string
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
    id?: StringFilter<"HistoriaClinica"> | string
    pacienteId?: StringFilter<"HistoriaClinica"> | string
    medicoId?: StringFilter<"HistoriaClinica"> | string
    fecha?: DateTimeFilter<"HistoriaClinica"> | Date | string
    diagnostico?: StringFilter<"HistoriaClinica"> | string
    sintomas?: StringNullableFilter<"HistoriaClinica"> | string | null
    tratamiento?: StringNullableFilter<"HistoriaClinica"> | string | null
    medicamentos?: StringNullableFilter<"HistoriaClinica"> | string | null
    alergias?: StringNullableFilter<"HistoriaClinica"> | string | null
    signosVitales?: StringNullableFilter<"HistoriaClinica"> | string | null
    observaciones?: StringNullableFilter<"HistoriaClinica"> | string | null
    proximaRevision?: DateTimeNullableFilter<"HistoriaClinica"> | Date | string | null
    estado?: StringFilter<"HistoriaClinica"> | string
    fechaActualizacion?: DateTimeFilter<"HistoriaClinica"> | Date | string
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
    id?: StringFilter<"Mensaje"> | string
    conversacionId?: StringFilter<"Mensaje"> | string
    remitenteId?: StringFilter<"Mensaje"> | string
    destinatarioId?: StringFilter<"Mensaje"> | string
    contenido?: StringFilter<"Mensaje"> | string
    fecha?: DateTimeFilter<"Mensaje"> | Date | string
    leido?: BoolFilter<"Mensaje"> | boolean
    tipoRemitente?: StringFilter<"Mensaje"> | string
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
    id?: StringFilter<"Auditoria"> | string
    usuarioId?: StringFilter<"Auditoria"> | string
    fecha?: DateTimeFilter<"Auditoria"> | Date | string
    accion?: StringFilter<"Auditoria"> | string
    detalles?: StringNullableFilter<"Auditoria"> | string | null
    ip?: StringNullableFilter<"Auditoria"> | string | null
  }

  export type ConversacionUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ConversacionWhereUniqueInput
    update: XOR<ConversacionUpdateWithoutPacienteInput, ConversacionUncheckedUpdateWithoutPacienteInput>
    create: XOR<ConversacionCreateWithoutPacienteInput, ConversacionUncheckedCreateWithoutPacienteInput>
  }

  export type ConversacionUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ConversacionWhereUniqueInput
    data: XOR<ConversacionUpdateWithoutPacienteInput, ConversacionUncheckedUpdateWithoutPacienteInput>
  }

  export type ConversacionUpdateManyWithWhereWithoutPacienteInput = {
    where: ConversacionScalarWhereInput
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyWithoutPacienteInput>
  }

  export type ConversacionScalarWhereInput = {
    AND?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
    OR?: ConversacionScalarWhereInput[]
    NOT?: ConversacionScalarWhereInput | ConversacionScalarWhereInput[]
    id?: StringFilter<"Conversacion"> | string
    pacienteId?: StringFilter<"Conversacion"> | string
    medicoId?: StringFilter<"Conversacion"> | string
    asunto?: StringNullableFilter<"Conversacion"> | string | null
    estado?: StringFilter<"Conversacion"> | string
    fechaCreacion?: DateTimeFilter<"Conversacion"> | Date | string
    ultimaActividad?: DateTimeFilter<"Conversacion"> | Date | string
  }

  export type MedicoCreateWithoutEspecialidadInput = {
    id?: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
    citas?: CitaCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
    conversaciones?: ConversacionCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutEspecialidadInput = {
    id?: string
    usuarioId: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutMedicoInput
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
    id?: StringFilter<"Medico"> | string
    usuarioId?: StringFilter<"Medico"> | string
    especialidadId?: StringFilter<"Medico"> | string
    licencia?: StringNullableFilter<"Medico"> | string | null
    horarioInicio?: StringNullableFilter<"Medico"> | string | null
    horarioFin?: StringNullableFilter<"Medico"> | string | null
  }

  export type UsuarioCreateWithoutMedicoInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioUncheckedCreateWithoutMedicoInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioCreateOrConnectWithoutMedicoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMedicoInput, UsuarioUncheckedCreateWithoutMedicoInput>
  }

  export type EspecialidadCreateWithoutMedicosInput = {
    id?: string
    nombre: string
    activa?: boolean
  }

  export type EspecialidadUncheckedCreateWithoutMedicosInput = {
    id?: string
    nombre: string
    activa?: boolean
  }

  export type EspecialidadCreateOrConnectWithoutMedicosInput = {
    where: EspecialidadWhereUniqueInput
    create: XOR<EspecialidadCreateWithoutMedicosInput, EspecialidadUncheckedCreateWithoutMedicosInput>
  }

  export type CitaCreateWithoutMedicoInput = {
    id?: string
    fecha: Date | string
    hora: Date | string
    sintomas?: string | null
    notas?: string | null
    tipo?: $Enums.TipoCita
    estado?: $Enums.EstadoCita
    prioridad?: $Enums.PrioridadCita
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    paciente: UsuarioCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutMedicoInput = {
    id?: string
    fecha: Date | string
    hora: Date | string
    pacienteId: string
    sintomas?: string | null
    notas?: string | null
    tipo?: $Enums.TipoCita
    estado?: $Enums.EstadoCita
    prioridad?: $Enums.PrioridadCita
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
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
    id?: string
    fecha?: Date | string
    diagnostico: string
    sintomas?: string | null
    tratamiento?: string | null
    medicamentos?: string | null
    alergias?: string | null
    signosVitales?: string | null
    observaciones?: string | null
    proximaRevision?: Date | string | null
    estado?: string
    fechaActualizacion?: Date | string
    paciente: UsuarioCreateNestedOneWithoutHistoriasInput
  }

  export type HistoriaClinicaUncheckedCreateWithoutMedicoInput = {
    id?: string
    pacienteId: string
    fecha?: Date | string
    diagnostico: string
    sintomas?: string | null
    tratamiento?: string | null
    medicamentos?: string | null
    alergias?: string | null
    signosVitales?: string | null
    observaciones?: string | null
    proximaRevision?: Date | string | null
    estado?: string
    fechaActualizacion?: Date | string
  }

  export type HistoriaClinicaCreateOrConnectWithoutMedicoInput = {
    where: HistoriaClinicaWhereUniqueInput
    create: XOR<HistoriaClinicaCreateWithoutMedicoInput, HistoriaClinicaUncheckedCreateWithoutMedicoInput>
  }

  export type HistoriaClinicaCreateManyMedicoInputEnvelope = {
    data: HistoriaClinicaCreateManyMedicoInput | HistoriaClinicaCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type ConversacionCreateWithoutMedicoInput = {
    id?: string
    asunto?: string | null
    estado?: string
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string
    paciente: UsuarioCreateNestedOneWithoutConversacionesInput
    mensajes?: MensajeCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionUncheckedCreateWithoutMedicoInput = {
    id?: string
    pacienteId: string
    asunto?: string | null
    estado?: string
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string
    mensajes?: MensajeUncheckedCreateNestedManyWithoutConversacionInput
  }

  export type ConversacionCreateOrConnectWithoutMedicoInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutMedicoInput, ConversacionUncheckedCreateWithoutMedicoInput>
  }

  export type ConversacionCreateManyMedicoInputEnvelope = {
    data: ConversacionCreateManyMedicoInput | ConversacionCreateManyMedicoInput[]
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
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPacienteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPacienteNestedInput
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
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EspecialidadUncheckedUpdateWithoutMedicosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activa?: BoolFieldUpdateOperationsInput | boolean
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

  export type ConversacionUpsertWithWhereUniqueWithoutMedicoInput = {
    where: ConversacionWhereUniqueInput
    update: XOR<ConversacionUpdateWithoutMedicoInput, ConversacionUncheckedUpdateWithoutMedicoInput>
    create: XOR<ConversacionCreateWithoutMedicoInput, ConversacionUncheckedCreateWithoutMedicoInput>
  }

  export type ConversacionUpdateWithWhereUniqueWithoutMedicoInput = {
    where: ConversacionWhereUniqueInput
    data: XOR<ConversacionUpdateWithoutMedicoInput, ConversacionUncheckedUpdateWithoutMedicoInput>
  }

  export type ConversacionUpdateManyWithWhereWithoutMedicoInput = {
    where: ConversacionScalarWhereInput
    data: XOR<ConversacionUpdateManyMutationInput, ConversacionUncheckedUpdateManyWithoutMedicoInput>
  }

  export type UsuarioCreateWithoutCitasInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioUncheckedCreateWithoutCitasInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioCreateOrConnectWithoutCitasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCitasInput, UsuarioUncheckedCreateWithoutCitasInput>
  }

  export type MedicoCreateWithoutCitasInput = {
    id?: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    historias?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
    conversaciones?: ConversacionCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutCitasInput = {
    id?: string
    usuarioId: string
    especialidadId: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutMedicoInput
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
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPacienteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPacienteNestedInput
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
    id?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
    conversaciones?: ConversacionUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutCitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    especialidadId?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type UsuarioCreateWithoutHistoriasInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioUncheckedCreateWithoutHistoriasInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioCreateOrConnectWithoutHistoriasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHistoriasInput, UsuarioUncheckedCreateWithoutHistoriasInput>
  }

  export type MedicoCreateWithoutHistoriasInput = {
    id?: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    citas?: CitaCreateNestedManyWithoutMedicoInput
    conversaciones?: ConversacionCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutHistoriasInput = {
    id?: string
    usuarioId: string
    especialidadId: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutMedicoInput
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
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPacienteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutHistoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPacienteNestedInput
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
    id?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    citas?: CitaUpdateManyWithoutMedicoNestedInput
    conversaciones?: ConversacionUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutHistoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    especialidadId?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type UsuarioCreateWithoutConversacionesInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutConversacionesInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutConversacionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutConversacionesInput, UsuarioUncheckedCreateWithoutConversacionesInput>
  }

  export type MedicoCreateWithoutConversacionesInput = {
    id?: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
    especialidad: EspecialidadCreateNestedOneWithoutMedicosInput
    citas?: CitaCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutConversacionesInput = {
    id?: string
    usuarioId: string
    especialidadId: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
    citas?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutConversacionesInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutConversacionesInput, MedicoUncheckedCreateWithoutConversacionesInput>
  }

  export type MensajeCreateWithoutConversacionInput = {
    id?: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
    remitente: UsuarioCreateNestedOneWithoutMensajesEnviadosInput
    destinatario: UsuarioCreateNestedOneWithoutMensajesRecibidosInput
  }

  export type MensajeUncheckedCreateWithoutConversacionInput = {
    id?: string
    remitenteId: string
    destinatarioId: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
  }

  export type MensajeCreateOrConnectWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    create: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput>
  }

  export type MensajeCreateManyConversacionInputEnvelope = {
    data: MensajeCreateManyConversacionInput | MensajeCreateManyConversacionInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutConversacionesInput = {
    update: XOR<UsuarioUpdateWithoutConversacionesInput, UsuarioUncheckedUpdateWithoutConversacionesInput>
    create: XOR<UsuarioCreateWithoutConversacionesInput, UsuarioUncheckedCreateWithoutConversacionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutConversacionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutConversacionesInput, UsuarioUncheckedUpdateWithoutConversacionesInput>
  }

  export type UsuarioUpdateWithoutConversacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutConversacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MedicoUpsertWithoutConversacionesInput = {
    update: XOR<MedicoUpdateWithoutConversacionesInput, MedicoUncheckedUpdateWithoutConversacionesInput>
    create: XOR<MedicoCreateWithoutConversacionesInput, MedicoUncheckedCreateWithoutConversacionesInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutConversacionesInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutConversacionesInput, MedicoUncheckedUpdateWithoutConversacionesInput>
  }

  export type MedicoUpdateWithoutConversacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicosNestedInput
    citas?: CitaUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutConversacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    especialidadId?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type MensajeUpsertWithWhereUniqueWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    update: XOR<MensajeUpdateWithoutConversacionInput, MensajeUncheckedUpdateWithoutConversacionInput>
    create: XOR<MensajeCreateWithoutConversacionInput, MensajeUncheckedCreateWithoutConversacionInput>
  }

  export type MensajeUpdateWithWhereUniqueWithoutConversacionInput = {
    where: MensajeWhereUniqueInput
    data: XOR<MensajeUpdateWithoutConversacionInput, MensajeUncheckedUpdateWithoutConversacionInput>
  }

  export type MensajeUpdateManyWithWhereWithoutConversacionInput = {
    where: MensajeScalarWhereInput
    data: XOR<MensajeUpdateManyMutationInput, MensajeUncheckedUpdateManyWithoutConversacionInput>
  }

  export type ConversacionCreateWithoutMensajesInput = {
    id?: string
    asunto?: string | null
    estado?: string
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string
    paciente: UsuarioCreateNestedOneWithoutConversacionesInput
    medico: MedicoCreateNestedOneWithoutConversacionesInput
  }

  export type ConversacionUncheckedCreateWithoutMensajesInput = {
    id?: string
    pacienteId: string
    medicoId: string
    asunto?: string | null
    estado?: string
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string
  }

  export type ConversacionCreateOrConnectWithoutMensajesInput = {
    where: ConversacionWhereUniqueInput
    create: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
  }

  export type UsuarioCreateWithoutMensajesEnviadosInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioUncheckedCreateWithoutMensajesEnviadosInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioCreateOrConnectWithoutMensajesEnviadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMensajesEnviadosInput, UsuarioUncheckedCreateWithoutMensajesEnviadosInput>
  }

  export type UsuarioCreateWithoutMensajesRecibidosInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    auditorias?: AuditoriaCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioUncheckedCreateWithoutMensajesRecibidosInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    auditorias?: AuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioCreateOrConnectWithoutMensajesRecibidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMensajesRecibidosInput, UsuarioUncheckedCreateWithoutMensajesRecibidosInput>
  }

  export type ConversacionUpsertWithoutMensajesInput = {
    update: XOR<ConversacionUpdateWithoutMensajesInput, ConversacionUncheckedUpdateWithoutMensajesInput>
    create: XOR<ConversacionCreateWithoutMensajesInput, ConversacionUncheckedCreateWithoutMensajesInput>
    where?: ConversacionWhereInput
  }

  export type ConversacionUpdateToOneWithWhereWithoutMensajesInput = {
    where?: ConversacionWhereInput
    data: XOR<ConversacionUpdateWithoutMensajesInput, ConversacionUncheckedUpdateWithoutMensajesInput>
  }

  export type ConversacionUpdateWithoutMensajesInput = {
    id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: UsuarioUpdateOneRequiredWithoutConversacionesNestedInput
    medico?: MedicoUpdateOneRequiredWithoutConversacionesNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutMensajesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    medicoId?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
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
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPacienteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMensajesEnviadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPacienteNestedInput
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
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    auditorias?: AuditoriaUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPacienteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMensajesRecibidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    auditorias?: AuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type UsuarioCreateWithoutAuditoriasInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    citas?: CitaCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeCreateNestedManyWithoutDestinatarioInput
    conversaciones?: ConversacionCreateNestedManyWithoutPacienteInput
  }

  export type UsuarioUncheckedCreateWithoutAuditoriasInput = {
    id?: string
    nombre: string
    email: string
    contraseña: string
    rol: string
    telefono?: string | null
    fechaNacimiento?: Date | string | null
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string | null
    activo?: boolean
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    historias?: HistoriaClinicaUncheckedCreateNestedManyWithoutPacienteInput
    mensajesEnviados?: MensajeUncheckedCreateNestedManyWithoutRemitenteInput
    mensajesRecibidos?: MensajeUncheckedCreateNestedManyWithoutDestinatarioInput
    conversaciones?: ConversacionUncheckedCreateNestedManyWithoutPacienteInput
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
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUpdateManyWithoutDestinatarioNestedInput
    conversaciones?: ConversacionUpdateManyWithoutPacienteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAuditoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutPacienteNestedInput
    mensajesEnviados?: MensajeUncheckedUpdateManyWithoutRemitenteNestedInput
    mensajesRecibidos?: MensajeUncheckedUpdateManyWithoutDestinatarioNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type CitaCreateManyPacienteInput = {
    id?: string
    fecha: Date | string
    hora: Date | string
    medicoId: string
    sintomas?: string | null
    notas?: string | null
    tipo?: $Enums.TipoCita
    estado?: $Enums.EstadoCita
    prioridad?: $Enums.PrioridadCita
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type HistoriaClinicaCreateManyPacienteInput = {
    id?: string
    medicoId: string
    fecha?: Date | string
    diagnostico: string
    sintomas?: string | null
    tratamiento?: string | null
    medicamentos?: string | null
    alergias?: string | null
    signosVitales?: string | null
    observaciones?: string | null
    proximaRevision?: Date | string | null
    estado?: string
    fechaActualizacion?: Date | string
  }

  export type MensajeCreateManyRemitenteInput = {
    id?: string
    conversacionId: string
    destinatarioId: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
  }

  export type MensajeCreateManyDestinatarioInput = {
    id?: string
    conversacionId: string
    remitenteId: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
  }

  export type AuditoriaCreateManyUsuarioInput = {
    id?: string
    fecha?: Date | string
    accion: string
    detalles?: string | null
    ip?: string | null
  }

  export type ConversacionCreateManyPacienteInput = {
    id?: string
    medicoId: string
    asunto?: string | null
    estado?: string
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string
  }

  export type CitaUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoCitaFieldUpdateOperationsInput | $Enums.TipoCita
    estado?: EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFieldUpdateOperationsInput | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    medicoId?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoCitaFieldUpdateOperationsInput | $Enums.TipoCita
    estado?: EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFieldUpdateOperationsInput | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUncheckedUpdateManyWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    medicoId?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoCitaFieldUpdateOperationsInput | $Enums.TipoCita
    estado?: EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFieldUpdateOperationsInput | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriaClinicaUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    medicamentos?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: NullableStringFieldUpdateOperationsInput | string | null
    signosVitales?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    proximaRevision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutHistoriasNestedInput
  }

  export type HistoriaClinicaUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicoId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    medicamentos?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: NullableStringFieldUpdateOperationsInput | string | null
    signosVitales?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    proximaRevision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriaClinicaUncheckedUpdateManyWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicoId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    medicamentos?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: NullableStringFieldUpdateOperationsInput | string | null
    signosVitales?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    proximaRevision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeUpdateWithoutRemitenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
    conversacion?: ConversacionUpdateOneRequiredWithoutMensajesNestedInput
    destinatario?: UsuarioUpdateOneRequiredWithoutMensajesRecibidosNestedInput
  }

  export type MensajeUncheckedUpdateWithoutRemitenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversacionId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeUncheckedUpdateManyWithoutRemitenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversacionId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeUpdateWithoutDestinatarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
    conversacion?: ConversacionUpdateOneRequiredWithoutMensajesNestedInput
    remitente?: UsuarioUpdateOneRequiredWithoutMensajesEnviadosNestedInput
  }

  export type MensajeUncheckedUpdateWithoutDestinatarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversacionId?: StringFieldUpdateOperationsInput | string
    remitenteId?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeUncheckedUpdateManyWithoutDestinatarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversacionId?: StringFieldUpdateOperationsInput | string
    remitenteId?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
  }

  export type AuditoriaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    detalles?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditoriaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    detalles?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditoriaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    detalles?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversacionUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutConversacionesNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicoId?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateManyWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicoId?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicoCreateManyEspecialidadInput = {
    id?: string
    usuarioId: string
    licencia?: string | null
    horarioInicio?: string | null
    horarioFin?: string | null
  }

  export type MedicoUpdateWithoutEspecialidadInput = {
    id?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
    citas?: CitaUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUpdateManyWithoutMedicoNestedInput
    conversaciones?: ConversacionUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutEspecialidadInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
    citas?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    historias?: HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
    conversaciones?: ConversacionUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateManyWithoutEspecialidadInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    licencia?: NullableStringFieldUpdateOperationsInput | string | null
    horarioInicio?: NullableStringFieldUpdateOperationsInput | string | null
    horarioFin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitaCreateManyMedicoInput = {
    id?: string
    fecha: Date | string
    hora: Date | string
    pacienteId: string
    sintomas?: string | null
    notas?: string | null
    tipo?: $Enums.TipoCita
    estado?: $Enums.EstadoCita
    prioridad?: $Enums.PrioridadCita
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type HistoriaClinicaCreateManyMedicoInput = {
    id?: string
    pacienteId: string
    fecha?: Date | string
    diagnostico: string
    sintomas?: string | null
    tratamiento?: string | null
    medicamentos?: string | null
    alergias?: string | null
    signosVitales?: string | null
    observaciones?: string | null
    proximaRevision?: Date | string | null
    estado?: string
    fechaActualizacion?: Date | string
  }

  export type ConversacionCreateManyMedicoInput = {
    id?: string
    pacienteId: string
    asunto?: string | null
    estado?: string
    fechaCreacion?: Date | string
    ultimaActividad?: Date | string
  }

  export type CitaUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoCitaFieldUpdateOperationsInput | $Enums.TipoCita
    estado?: EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFieldUpdateOperationsInput | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: UsuarioUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoCitaFieldUpdateOperationsInput | $Enums.TipoCita
    estado?: EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFieldUpdateOperationsInput | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUncheckedUpdateManyWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: EnumTipoCitaFieldUpdateOperationsInput | $Enums.TipoCita
    estado?: EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita
    prioridad?: EnumPrioridadCitaFieldUpdateOperationsInput | $Enums.PrioridadCita
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriaClinicaUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    medicamentos?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: NullableStringFieldUpdateOperationsInput | string | null
    signosVitales?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    proximaRevision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: UsuarioUpdateOneRequiredWithoutHistoriasNestedInput
  }

  export type HistoriaClinicaUncheckedUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    medicamentos?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: NullableStringFieldUpdateOperationsInput | string | null
    signosVitales?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    proximaRevision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriaClinicaUncheckedUpdateManyWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    tratamiento?: NullableStringFieldUpdateOperationsInput | string | null
    medicamentos?: NullableStringFieldUpdateOperationsInput | string | null
    alergias?: NullableStringFieldUpdateOperationsInput | string | null
    signosVitales?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    proximaRevision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversacionUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: UsuarioUpdateOneRequiredWithoutConversacionesNestedInput
    mensajes?: MensajeUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    mensajes?: MensajeUncheckedUpdateManyWithoutConversacionNestedInput
  }

  export type ConversacionUncheckedUpdateManyWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    asunto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensajeCreateManyConversacionInput = {
    id?: string
    remitenteId: string
    destinatarioId: string
    contenido: string
    fecha?: Date | string
    leido?: boolean
    tipoRemitente: string
  }

  export type MensajeUpdateWithoutConversacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
    remitente?: UsuarioUpdateOneRequiredWithoutMensajesEnviadosNestedInput
    destinatario?: UsuarioUpdateOneRequiredWithoutMensajesRecibidosNestedInput
  }

  export type MensajeUncheckedUpdateWithoutConversacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    remitenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
  }

  export type MensajeUncheckedUpdateManyWithoutConversacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    remitenteId?: StringFieldUpdateOperationsInput | string
    destinatarioId?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    tipoRemitente?: StringFieldUpdateOperationsInput | string
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