
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
 * Model PokemonCard
 * 
 */
export type PokemonCard = $Result.DefaultSelection<Prisma.$PokemonCardPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Deck
 * 
 */
export type Deck = $Result.DefaultSelection<Prisma.$DeckPayload>
/**
 * Model DeckCard
 * 
 */
export type DeckCard = $Result.DefaultSelection<Prisma.$DeckCardPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PokemonType: {
  Normal: 'Normal',
  Fire: 'Fire',
  Water: 'Water',
  Electric: 'Electric',
  Grass: 'Grass',
  Ice: 'Ice',
  Fighting: 'Fighting',
  Poison: 'Poison',
  Ground: 'Ground',
  Flying: 'Flying',
  Psychic: 'Psychic',
  Bug: 'Bug',
  Rock: 'Rock',
  Ghost: 'Ghost',
  Dragon: 'Dragon',
  Dark: 'Dark',
  Steel: 'Steel',
  Fairy: 'Fairy'
};

export type PokemonType = (typeof PokemonType)[keyof typeof PokemonType]

}

export type PokemonType = $Enums.PokemonType

export const PokemonType: typeof $Enums.PokemonType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PokemonCards
 * const pokemonCards = await prisma.pokemonCard.findMany()
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
   * // Fetch zero or more PokemonCards
   * const pokemonCards = await prisma.pokemonCard.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.pokemonCard`: Exposes CRUD operations for the **PokemonCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokemonCards
    * const pokemonCards = await prisma.pokemonCard.findMany()
    * ```
    */
  get pokemonCard(): Prisma.PokemonCardDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.deck`: Exposes CRUD operations for the **Deck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decks
    * const decks = await prisma.deck.findMany()
    * ```
    */
  get deck(): Prisma.DeckDelegate<ExtArgs>;

  /**
   * `prisma.deckCard`: Exposes CRUD operations for the **DeckCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeckCards
    * const deckCards = await prisma.deckCard.findMany()
    * ```
    */
  get deckCard(): Prisma.DeckCardDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    PokemonCard: 'PokemonCard',
    User: 'User',
    Deck: 'Deck',
    DeckCard: 'DeckCard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "pokemonCard" | "user" | "deck" | "deckCard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PokemonCard: {
        payload: Prisma.$PokemonCardPayload<ExtArgs>
        fields: Prisma.PokemonCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonCardPayload>
          }
          findFirst: {
            args: Prisma.PokemonCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonCardPayload>
          }
          findMany: {
            args: Prisma.PokemonCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonCardPayload>[]
          }
          create: {
            args: Prisma.PokemonCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonCardPayload>
          }
          createMany: {
            args: Prisma.PokemonCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonCardPayload>[]
          }
          delete: {
            args: Prisma.PokemonCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonCardPayload>
          }
          update: {
            args: Prisma.PokemonCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonCardPayload>
          }
          deleteMany: {
            args: Prisma.PokemonCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PokemonCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonCardPayload>
          }
          aggregate: {
            args: Prisma.PokemonCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemonCard>
          }
          groupBy: {
            args: Prisma.PokemonCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonCardCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonCardCountAggregateOutputType> | number
          }
        }
      }
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
      Deck: {
        payload: Prisma.$DeckPayload<ExtArgs>
        fields: Prisma.DeckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findFirst: {
            args: Prisma.DeckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findMany: {
            args: Prisma.DeckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          create: {
            args: Prisma.DeckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          createMany: {
            args: Prisma.DeckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          delete: {
            args: Prisma.DeckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          update: {
            args: Prisma.DeckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          deleteMany: {
            args: Prisma.DeckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          aggregate: {
            args: Prisma.DeckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeck>
          }
          groupBy: {
            args: Prisma.DeckGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckCountArgs<ExtArgs>
            result: $Utils.Optional<DeckCountAggregateOutputType> | number
          }
        }
      }
      DeckCard: {
        payload: Prisma.$DeckCardPayload<ExtArgs>
        fields: Prisma.DeckCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          findFirst: {
            args: Prisma.DeckCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          findMany: {
            args: Prisma.DeckCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>[]
          }
          create: {
            args: Prisma.DeckCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          createMany: {
            args: Prisma.DeckCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeckCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>[]
          }
          delete: {
            args: Prisma.DeckCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          update: {
            args: Prisma.DeckCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          deleteMany: {
            args: Prisma.DeckCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeckCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          aggregate: {
            args: Prisma.DeckCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeckCard>
          }
          groupBy: {
            args: Prisma.DeckCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckCardCountArgs<ExtArgs>
            result: $Utils.Optional<DeckCardCountAggregateOutputType> | number
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
   * Count Type PokemonCardCountOutputType
   */

  export type PokemonCardCountOutputType = {
    deckCards: number
  }

  export type PokemonCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deckCards?: boolean | PokemonCardCountOutputTypeCountDeckCardsArgs
  }

  // Custom InputTypes
  /**
   * PokemonCardCountOutputType without action
   */
  export type PokemonCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCardCountOutputType
     */
    select?: PokemonCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PokemonCardCountOutputType without action
   */
  export type PokemonCardCountOutputTypeCountDeckCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckCardWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    decks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decks?: boolean | UserCountOutputTypeCountDecksArgs
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
  export type UserCountOutputTypeCountDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
  }


  /**
   * Count Type DeckCountOutputType
   */

  export type DeckCountOutputType = {
    deckCards: number
  }

  export type DeckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deckCards?: boolean | DeckCountOutputTypeCountDeckCardsArgs
  }

  // Custom InputTypes
  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCountOutputType
     */
    select?: DeckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeCountDeckCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckCardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PokemonCard
   */

  export type AggregatePokemonCard = {
    _count: PokemonCardCountAggregateOutputType | null
    _avg: PokemonCardAvgAggregateOutputType | null
    _sum: PokemonCardSumAggregateOutputType | null
    _min: PokemonCardMinAggregateOutputType | null
    _max: PokemonCardMaxAggregateOutputType | null
  }

  export type PokemonCardAvgAggregateOutputType = {
    id: number | null
    pokedexId: number | null
    lifePoints: number | null
    size: number | null
    weight: number | null
  }

  export type PokemonCardSumAggregateOutputType = {
    id: number | null
    pokedexId: number | null
    lifePoints: number | null
    size: number | null
    weight: number | null
  }

  export type PokemonCardMinAggregateOutputType = {
    id: number | null
    name: string | null
    pokedexId: number | null
    type: $Enums.PokemonType | null
    lifePoints: number | null
    size: number | null
    weight: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PokemonCardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    pokedexId: number | null
    type: $Enums.PokemonType | null
    lifePoints: number | null
    size: number | null
    weight: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PokemonCardCountAggregateOutputType = {
    id: number
    name: number
    pokedexId: number
    type: number
    lifePoints: number
    size: number
    weight: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PokemonCardAvgAggregateInputType = {
    id?: true
    pokedexId?: true
    lifePoints?: true
    size?: true
    weight?: true
  }

  export type PokemonCardSumAggregateInputType = {
    id?: true
    pokedexId?: true
    lifePoints?: true
    size?: true
    weight?: true
  }

  export type PokemonCardMinAggregateInputType = {
    id?: true
    name?: true
    pokedexId?: true
    type?: true
    lifePoints?: true
    size?: true
    weight?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PokemonCardMaxAggregateInputType = {
    id?: true
    name?: true
    pokedexId?: true
    type?: true
    lifePoints?: true
    size?: true
    weight?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PokemonCardCountAggregateInputType = {
    id?: true
    name?: true
    pokedexId?: true
    type?: true
    lifePoints?: true
    size?: true
    weight?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PokemonCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonCard to aggregate.
     */
    where?: PokemonCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonCards to fetch.
     */
    orderBy?: PokemonCardOrderByWithRelationInput | PokemonCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokemonCards
    **/
    _count?: true | PokemonCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonCardMaxAggregateInputType
  }

  export type GetPokemonCardAggregateType<T extends PokemonCardAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemonCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemonCard[P]>
      : GetScalarType<T[P], AggregatePokemonCard[P]>
  }




  export type PokemonCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonCardWhereInput
    orderBy?: PokemonCardOrderByWithAggregationInput | PokemonCardOrderByWithAggregationInput[]
    by: PokemonCardScalarFieldEnum[] | PokemonCardScalarFieldEnum
    having?: PokemonCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonCardCountAggregateInputType | true
    _avg?: PokemonCardAvgAggregateInputType
    _sum?: PokemonCardSumAggregateInputType
    _min?: PokemonCardMinAggregateInputType
    _max?: PokemonCardMaxAggregateInputType
  }

  export type PokemonCardGroupByOutputType = {
    id: number
    name: string
    pokedexId: number
    type: $Enums.PokemonType
    lifePoints: number
    size: number | null
    weight: number | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: PokemonCardCountAggregateOutputType | null
    _avg: PokemonCardAvgAggregateOutputType | null
    _sum: PokemonCardSumAggregateOutputType | null
    _min: PokemonCardMinAggregateOutputType | null
    _max: PokemonCardMaxAggregateOutputType | null
  }

  type GetPokemonCardGroupByPayload<T extends PokemonCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonCardGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonCardGroupByOutputType[P]>
        }
      >
    >


  export type PokemonCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pokedexId?: boolean
    type?: boolean
    lifePoints?: boolean
    size?: boolean
    weight?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deckCards?: boolean | PokemonCard$deckCardsArgs<ExtArgs>
    _count?: boolean | PokemonCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonCard"]>

  export type PokemonCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pokedexId?: boolean
    type?: boolean
    lifePoints?: boolean
    size?: boolean
    weight?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pokemonCard"]>

  export type PokemonCardSelectScalar = {
    id?: boolean
    name?: boolean
    pokedexId?: boolean
    type?: boolean
    lifePoints?: boolean
    size?: boolean
    weight?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PokemonCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deckCards?: boolean | PokemonCard$deckCardsArgs<ExtArgs>
    _count?: boolean | PokemonCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PokemonCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PokemonCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokemonCard"
    objects: {
      deckCards: Prisma.$DeckCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      pokedexId: number
      type: $Enums.PokemonType
      lifePoints: number
      size: number | null
      weight: number | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pokemonCard"]>
    composites: {}
  }

  type PokemonCardGetPayload<S extends boolean | null | undefined | PokemonCardDefaultArgs> = $Result.GetResult<Prisma.$PokemonCardPayload, S>

  type PokemonCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PokemonCardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PokemonCardCountAggregateInputType | true
    }

  export interface PokemonCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokemonCard'], meta: { name: 'PokemonCard' } }
    /**
     * Find zero or one PokemonCard that matches the filter.
     * @param {PokemonCardFindUniqueArgs} args - Arguments to find a PokemonCard
     * @example
     * // Get one PokemonCard
     * const pokemonCard = await prisma.pokemonCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonCardFindUniqueArgs>(args: SelectSubset<T, PokemonCardFindUniqueArgs<ExtArgs>>): Prisma__PokemonCardClient<$Result.GetResult<Prisma.$PokemonCardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PokemonCard that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PokemonCardFindUniqueOrThrowArgs} args - Arguments to find a PokemonCard
     * @example
     * // Get one PokemonCard
     * const pokemonCard = await prisma.pokemonCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonCardFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonCardClient<$Result.GetResult<Prisma.$PokemonCardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PokemonCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCardFindFirstArgs} args - Arguments to find a PokemonCard
     * @example
     * // Get one PokemonCard
     * const pokemonCard = await prisma.pokemonCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonCardFindFirstArgs>(args?: SelectSubset<T, PokemonCardFindFirstArgs<ExtArgs>>): Prisma__PokemonCardClient<$Result.GetResult<Prisma.$PokemonCardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PokemonCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCardFindFirstOrThrowArgs} args - Arguments to find a PokemonCard
     * @example
     * // Get one PokemonCard
     * const pokemonCard = await prisma.pokemonCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonCardFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonCardClient<$Result.GetResult<Prisma.$PokemonCardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PokemonCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonCards
     * const pokemonCards = await prisma.pokemonCard.findMany()
     * 
     * // Get first 10 PokemonCards
     * const pokemonCards = await prisma.pokemonCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonCardWithIdOnly = await prisma.pokemonCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonCardFindManyArgs>(args?: SelectSubset<T, PokemonCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonCardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PokemonCard.
     * @param {PokemonCardCreateArgs} args - Arguments to create a PokemonCard.
     * @example
     * // Create one PokemonCard
     * const PokemonCard = await prisma.pokemonCard.create({
     *   data: {
     *     // ... data to create a PokemonCard
     *   }
     * })
     * 
     */
    create<T extends PokemonCardCreateArgs>(args: SelectSubset<T, PokemonCardCreateArgs<ExtArgs>>): Prisma__PokemonCardClient<$Result.GetResult<Prisma.$PokemonCardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PokemonCards.
     * @param {PokemonCardCreateManyArgs} args - Arguments to create many PokemonCards.
     * @example
     * // Create many PokemonCards
     * const pokemonCard = await prisma.pokemonCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonCardCreateManyArgs>(args?: SelectSubset<T, PokemonCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokemonCards and returns the data saved in the database.
     * @param {PokemonCardCreateManyAndReturnArgs} args - Arguments to create many PokemonCards.
     * @example
     * // Create many PokemonCards
     * const pokemonCard = await prisma.pokemonCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokemonCards and only return the `id`
     * const pokemonCardWithIdOnly = await prisma.pokemonCard.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonCardCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonCardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PokemonCard.
     * @param {PokemonCardDeleteArgs} args - Arguments to delete one PokemonCard.
     * @example
     * // Delete one PokemonCard
     * const PokemonCard = await prisma.pokemonCard.delete({
     *   where: {
     *     // ... filter to delete one PokemonCard
     *   }
     * })
     * 
     */
    delete<T extends PokemonCardDeleteArgs>(args: SelectSubset<T, PokemonCardDeleteArgs<ExtArgs>>): Prisma__PokemonCardClient<$Result.GetResult<Prisma.$PokemonCardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PokemonCard.
     * @param {PokemonCardUpdateArgs} args - Arguments to update one PokemonCard.
     * @example
     * // Update one PokemonCard
     * const pokemonCard = await prisma.pokemonCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonCardUpdateArgs>(args: SelectSubset<T, PokemonCardUpdateArgs<ExtArgs>>): Prisma__PokemonCardClient<$Result.GetResult<Prisma.$PokemonCardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PokemonCards.
     * @param {PokemonCardDeleteManyArgs} args - Arguments to filter PokemonCards to delete.
     * @example
     * // Delete a few PokemonCards
     * const { count } = await prisma.pokemonCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonCardDeleteManyArgs>(args?: SelectSubset<T, PokemonCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonCards
     * const pokemonCard = await prisma.pokemonCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonCardUpdateManyArgs>(args: SelectSubset<T, PokemonCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PokemonCard.
     * @param {PokemonCardUpsertArgs} args - Arguments to update or create a PokemonCard.
     * @example
     * // Update or create a PokemonCard
     * const pokemonCard = await prisma.pokemonCard.upsert({
     *   create: {
     *     // ... data to create a PokemonCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonCard we want to update
     *   }
     * })
     */
    upsert<T extends PokemonCardUpsertArgs>(args: SelectSubset<T, PokemonCardUpsertArgs<ExtArgs>>): Prisma__PokemonCardClient<$Result.GetResult<Prisma.$PokemonCardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PokemonCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCardCountArgs} args - Arguments to filter PokemonCards to count.
     * @example
     * // Count the number of PokemonCards
     * const count = await prisma.pokemonCard.count({
     *   where: {
     *     // ... the filter for the PokemonCards we want to count
     *   }
     * })
    **/
    count<T extends PokemonCardCountArgs>(
      args?: Subset<T, PokemonCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokemonCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonCardAggregateArgs>(args: Subset<T, PokemonCardAggregateArgs>): Prisma.PrismaPromise<GetPokemonCardAggregateType<T>>

    /**
     * Group by PokemonCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCardGroupByArgs} args - Group by arguments.
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
      T extends PokemonCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonCardGroupByArgs['orderBy'] }
        : { orderBy?: PokemonCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PokemonCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokemonCard model
   */
  readonly fields: PokemonCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokemonCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deckCards<T extends PokemonCard$deckCardsArgs<ExtArgs> = {}>(args?: Subset<T, PokemonCard$deckCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PokemonCard model
   */ 
  interface PokemonCardFieldRefs {
    readonly id: FieldRef<"PokemonCard", 'Int'>
    readonly name: FieldRef<"PokemonCard", 'String'>
    readonly pokedexId: FieldRef<"PokemonCard", 'Int'>
    readonly type: FieldRef<"PokemonCard", 'PokemonType'>
    readonly lifePoints: FieldRef<"PokemonCard", 'Int'>
    readonly size: FieldRef<"PokemonCard", 'Float'>
    readonly weight: FieldRef<"PokemonCard", 'Float'>
    readonly imageUrl: FieldRef<"PokemonCard", 'String'>
    readonly createdAt: FieldRef<"PokemonCard", 'DateTime'>
    readonly updatedAt: FieldRef<"PokemonCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PokemonCard findUnique
   */
  export type PokemonCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCard
     */
    select?: PokemonCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonCardInclude<ExtArgs> | null
    /**
     * Filter, which PokemonCard to fetch.
     */
    where: PokemonCardWhereUniqueInput
  }

  /**
   * PokemonCard findUniqueOrThrow
   */
  export type PokemonCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCard
     */
    select?: PokemonCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonCardInclude<ExtArgs> | null
    /**
     * Filter, which PokemonCard to fetch.
     */
    where: PokemonCardWhereUniqueInput
  }

  /**
   * PokemonCard findFirst
   */
  export type PokemonCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCard
     */
    select?: PokemonCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonCardInclude<ExtArgs> | null
    /**
     * Filter, which PokemonCard to fetch.
     */
    where?: PokemonCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonCards to fetch.
     */
    orderBy?: PokemonCardOrderByWithRelationInput | PokemonCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonCards.
     */
    cursor?: PokemonCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonCards.
     */
    distinct?: PokemonCardScalarFieldEnum | PokemonCardScalarFieldEnum[]
  }

  /**
   * PokemonCard findFirstOrThrow
   */
  export type PokemonCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCard
     */
    select?: PokemonCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonCardInclude<ExtArgs> | null
    /**
     * Filter, which PokemonCard to fetch.
     */
    where?: PokemonCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonCards to fetch.
     */
    orderBy?: PokemonCardOrderByWithRelationInput | PokemonCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonCards.
     */
    cursor?: PokemonCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonCards.
     */
    distinct?: PokemonCardScalarFieldEnum | PokemonCardScalarFieldEnum[]
  }

  /**
   * PokemonCard findMany
   */
  export type PokemonCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCard
     */
    select?: PokemonCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonCardInclude<ExtArgs> | null
    /**
     * Filter, which PokemonCards to fetch.
     */
    where?: PokemonCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonCards to fetch.
     */
    orderBy?: PokemonCardOrderByWithRelationInput | PokemonCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokemonCards.
     */
    cursor?: PokemonCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonCards.
     */
    skip?: number
    distinct?: PokemonCardScalarFieldEnum | PokemonCardScalarFieldEnum[]
  }

  /**
   * PokemonCard create
   */
  export type PokemonCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCard
     */
    select?: PokemonCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonCardInclude<ExtArgs> | null
    /**
     * The data needed to create a PokemonCard.
     */
    data: XOR<PokemonCardCreateInput, PokemonCardUncheckedCreateInput>
  }

  /**
   * PokemonCard createMany
   */
  export type PokemonCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonCards.
     */
    data: PokemonCardCreateManyInput | PokemonCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonCard createManyAndReturn
   */
  export type PokemonCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCard
     */
    select?: PokemonCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PokemonCards.
     */
    data: PokemonCardCreateManyInput | PokemonCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonCard update
   */
  export type PokemonCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCard
     */
    select?: PokemonCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonCardInclude<ExtArgs> | null
    /**
     * The data needed to update a PokemonCard.
     */
    data: XOR<PokemonCardUpdateInput, PokemonCardUncheckedUpdateInput>
    /**
     * Choose, which PokemonCard to update.
     */
    where: PokemonCardWhereUniqueInput
  }

  /**
   * PokemonCard updateMany
   */
  export type PokemonCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonCards.
     */
    data: XOR<PokemonCardUpdateManyMutationInput, PokemonCardUncheckedUpdateManyInput>
    /**
     * Filter which PokemonCards to update
     */
    where?: PokemonCardWhereInput
  }

  /**
   * PokemonCard upsert
   */
  export type PokemonCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCard
     */
    select?: PokemonCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonCardInclude<ExtArgs> | null
    /**
     * The filter to search for the PokemonCard to update in case it exists.
     */
    where: PokemonCardWhereUniqueInput
    /**
     * In case the PokemonCard found by the `where` argument doesn't exist, create a new PokemonCard with this data.
     */
    create: XOR<PokemonCardCreateInput, PokemonCardUncheckedCreateInput>
    /**
     * In case the PokemonCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonCardUpdateInput, PokemonCardUncheckedUpdateInput>
  }

  /**
   * PokemonCard delete
   */
  export type PokemonCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCard
     */
    select?: PokemonCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonCardInclude<ExtArgs> | null
    /**
     * Filter which PokemonCard to delete.
     */
    where: PokemonCardWhereUniqueInput
  }

  /**
   * PokemonCard deleteMany
   */
  export type PokemonCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonCards to delete
     */
    where?: PokemonCardWhereInput
  }

  /**
   * PokemonCard.deckCards
   */
  export type PokemonCard$deckCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    where?: DeckCardWhereInput
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    cursor?: DeckCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * PokemonCard without action
   */
  export type PokemonCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCard
     */
    select?: PokemonCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonCardInclude<ExtArgs> | null
  }


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
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
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
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    updatedAt: Date
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
    updatedAt?: boolean
    decks?: boolean | User$decksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decks?: boolean | User$decksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      decks: Prisma.$DeckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    decks<T extends User$decksArgs<ExtArgs> = {}>(args?: Subset<T, User$decksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
  }

  /**
   * User.decks
   */
  export type User$decksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    cursor?: DeckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Deck
   */

  export type AggregateDeck = {
    _count: DeckCountAggregateOutputType | null
    _avg: DeckAvgAggregateOutputType | null
    _sum: DeckSumAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  export type DeckAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DeckSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DeckMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeckMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeckCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeckAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DeckSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DeckMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeckMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeckCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deck to aggregate.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decks
    **/
    _count?: true | DeckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckMaxAggregateInputType
  }

  export type GetDeckAggregateType<T extends DeckAggregateArgs> = {
        [P in keyof T & keyof AggregateDeck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeck[P]>
      : GetScalarType<T[P], AggregateDeck[P]>
  }




  export type DeckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithAggregationInput | DeckOrderByWithAggregationInput[]
    by: DeckScalarFieldEnum[] | DeckScalarFieldEnum
    having?: DeckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckCountAggregateInputType | true
    _avg?: DeckAvgAggregateInputType
    _sum?: DeckSumAggregateInputType
    _min?: DeckMinAggregateInputType
    _max?: DeckMaxAggregateInputType
  }

  export type DeckGroupByOutputType = {
    id: number
    name: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: DeckCountAggregateOutputType | null
    _avg: DeckAvgAggregateOutputType | null
    _sum: DeckSumAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  type GetDeckGroupByPayload<T extends DeckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckGroupByOutputType[P]>
            : GetScalarType<T[P], DeckGroupByOutputType[P]>
        }
      >
    >


  export type DeckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    deckCards?: boolean | Deck$deckCardsArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    deckCards?: boolean | Deck$deckCardsArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deck"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      deckCards: Prisma.$DeckCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deck"]>
    composites: {}
  }

  type DeckGetPayload<S extends boolean | null | undefined | DeckDefaultArgs> = $Result.GetResult<Prisma.$DeckPayload, S>

  type DeckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeckFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeckCountAggregateInputType | true
    }

  export interface DeckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deck'], meta: { name: 'Deck' } }
    /**
     * Find zero or one Deck that matches the filter.
     * @param {DeckFindUniqueArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckFindUniqueArgs>(args: SelectSubset<T, DeckFindUniqueArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Deck that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeckFindUniqueOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Deck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckFindFirstArgs>(args?: SelectSubset<T, DeckFindFirstArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Deck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decks
     * const decks = await prisma.deck.findMany()
     * 
     * // Get first 10 Decks
     * const decks = await prisma.deck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deckWithIdOnly = await prisma.deck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeckFindManyArgs>(args?: SelectSubset<T, DeckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Deck.
     * @param {DeckCreateArgs} args - Arguments to create a Deck.
     * @example
     * // Create one Deck
     * const Deck = await prisma.deck.create({
     *   data: {
     *     // ... data to create a Deck
     *   }
     * })
     * 
     */
    create<T extends DeckCreateArgs>(args: SelectSubset<T, DeckCreateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Decks.
     * @param {DeckCreateManyArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckCreateManyArgs>(args?: SelectSubset<T, DeckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Decks and returns the data saved in the database.
     * @param {DeckCreateManyAndReturnArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Decks and only return the `id`
     * const deckWithIdOnly = await prisma.deck.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeckCreateManyAndReturnArgs>(args?: SelectSubset<T, DeckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Deck.
     * @param {DeckDeleteArgs} args - Arguments to delete one Deck.
     * @example
     * // Delete one Deck
     * const Deck = await prisma.deck.delete({
     *   where: {
     *     // ... filter to delete one Deck
     *   }
     * })
     * 
     */
    delete<T extends DeckDeleteArgs>(args: SelectSubset<T, DeckDeleteArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Deck.
     * @param {DeckUpdateArgs} args - Arguments to update one Deck.
     * @example
     * // Update one Deck
     * const deck = await prisma.deck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckUpdateArgs>(args: SelectSubset<T, DeckUpdateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Decks.
     * @param {DeckDeleteManyArgs} args - Arguments to filter Decks to delete.
     * @example
     * // Delete a few Decks
     * const { count } = await prisma.deck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckDeleteManyArgs>(args?: SelectSubset<T, DeckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decks
     * const deck = await prisma.deck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckUpdateManyArgs>(args: SelectSubset<T, DeckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deck.
     * @param {DeckUpsertArgs} args - Arguments to update or create a Deck.
     * @example
     * // Update or create a Deck
     * const deck = await prisma.deck.upsert({
     *   create: {
     *     // ... data to create a Deck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deck we want to update
     *   }
     * })
     */
    upsert<T extends DeckUpsertArgs>(args: SelectSubset<T, DeckUpsertArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCountArgs} args - Arguments to filter Decks to count.
     * @example
     * // Count the number of Decks
     * const count = await prisma.deck.count({
     *   where: {
     *     // ... the filter for the Decks we want to count
     *   }
     * })
    **/
    count<T extends DeckCountArgs>(
      args?: Subset<T, DeckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeckAggregateArgs>(args: Subset<T, DeckAggregateArgs>): Prisma.PrismaPromise<GetDeckAggregateType<T>>

    /**
     * Group by Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckGroupByArgs} args - Group by arguments.
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
      T extends DeckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckGroupByArgs['orderBy'] }
        : { orderBy?: DeckGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deck model
   */
  readonly fields: DeckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    deckCards<T extends Deck$deckCardsArgs<ExtArgs> = {}>(args?: Subset<T, Deck$deckCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Deck model
   */ 
  interface DeckFieldRefs {
    readonly id: FieldRef<"Deck", 'Int'>
    readonly name: FieldRef<"Deck", 'String'>
    readonly userId: FieldRef<"Deck", 'Int'>
    readonly createdAt: FieldRef<"Deck", 'DateTime'>
    readonly updatedAt: FieldRef<"Deck", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deck findUnique
   */
  export type DeckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findUniqueOrThrow
   */
  export type DeckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findFirst
   */
  export type DeckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findFirstOrThrow
   */
  export type DeckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findMany
   */
  export type DeckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck create
   */
  export type DeckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to create a Deck.
     */
    data: XOR<DeckCreateInput, DeckUncheckedCreateInput>
  }

  /**
   * Deck createMany
   */
  export type DeckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deck createManyAndReturn
   */
  export type DeckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deck update
   */
  export type DeckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to update a Deck.
     */
    data: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
    /**
     * Choose, which Deck to update.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck updateMany
   */
  export type DeckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decks.
     */
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DeckWhereInput
  }

  /**
   * Deck upsert
   */
  export type DeckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The filter to search for the Deck to update in case it exists.
     */
    where: DeckWhereUniqueInput
    /**
     * In case the Deck found by the `where` argument doesn't exist, create a new Deck with this data.
     */
    create: XOR<DeckCreateInput, DeckUncheckedCreateInput>
    /**
     * In case the Deck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
  }

  /**
   * Deck delete
   */
  export type DeckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter which Deck to delete.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck deleteMany
   */
  export type DeckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decks to delete
     */
    where?: DeckWhereInput
  }

  /**
   * Deck.deckCards
   */
  export type Deck$deckCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    where?: DeckCardWhereInput
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    cursor?: DeckCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * Deck without action
   */
  export type DeckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
  }


  /**
   * Model DeckCard
   */

  export type AggregateDeckCard = {
    _count: DeckCardCountAggregateOutputType | null
    _avg: DeckCardAvgAggregateOutputType | null
    _sum: DeckCardSumAggregateOutputType | null
    _min: DeckCardMinAggregateOutputType | null
    _max: DeckCardMaxAggregateOutputType | null
  }

  export type DeckCardAvgAggregateOutputType = {
    id: number | null
    deckId: number | null
    pokemonCardId: number | null
  }

  export type DeckCardSumAggregateOutputType = {
    id: number | null
    deckId: number | null
    pokemonCardId: number | null
  }

  export type DeckCardMinAggregateOutputType = {
    id: number | null
    deckId: number | null
    pokemonCardId: number | null
  }

  export type DeckCardMaxAggregateOutputType = {
    id: number | null
    deckId: number | null
    pokemonCardId: number | null
  }

  export type DeckCardCountAggregateOutputType = {
    id: number
    deckId: number
    pokemonCardId: number
    _all: number
  }


  export type DeckCardAvgAggregateInputType = {
    id?: true
    deckId?: true
    pokemonCardId?: true
  }

  export type DeckCardSumAggregateInputType = {
    id?: true
    deckId?: true
    pokemonCardId?: true
  }

  export type DeckCardMinAggregateInputType = {
    id?: true
    deckId?: true
    pokemonCardId?: true
  }

  export type DeckCardMaxAggregateInputType = {
    id?: true
    deckId?: true
    pokemonCardId?: true
  }

  export type DeckCardCountAggregateInputType = {
    id?: true
    deckId?: true
    pokemonCardId?: true
    _all?: true
  }

  export type DeckCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckCard to aggregate.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeckCards
    **/
    _count?: true | DeckCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeckCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeckCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckCardMaxAggregateInputType
  }

  export type GetDeckCardAggregateType<T extends DeckCardAggregateArgs> = {
        [P in keyof T & keyof AggregateDeckCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeckCard[P]>
      : GetScalarType<T[P], AggregateDeckCard[P]>
  }




  export type DeckCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckCardWhereInput
    orderBy?: DeckCardOrderByWithAggregationInput | DeckCardOrderByWithAggregationInput[]
    by: DeckCardScalarFieldEnum[] | DeckCardScalarFieldEnum
    having?: DeckCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckCardCountAggregateInputType | true
    _avg?: DeckCardAvgAggregateInputType
    _sum?: DeckCardSumAggregateInputType
    _min?: DeckCardMinAggregateInputType
    _max?: DeckCardMaxAggregateInputType
  }

  export type DeckCardGroupByOutputType = {
    id: number
    deckId: number
    pokemonCardId: number
    _count: DeckCardCountAggregateOutputType | null
    _avg: DeckCardAvgAggregateOutputType | null
    _sum: DeckCardSumAggregateOutputType | null
    _min: DeckCardMinAggregateOutputType | null
    _max: DeckCardMaxAggregateOutputType | null
  }

  type GetDeckCardGroupByPayload<T extends DeckCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckCardGroupByOutputType[P]>
            : GetScalarType<T[P], DeckCardGroupByOutputType[P]>
        }
      >
    >


  export type DeckCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deckId?: boolean
    pokemonCardId?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    pokemonCard?: boolean | PokemonCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckCard"]>

  export type DeckCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deckId?: boolean
    pokemonCardId?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    pokemonCard?: boolean | PokemonCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckCard"]>

  export type DeckCardSelectScalar = {
    id?: boolean
    deckId?: boolean
    pokemonCardId?: boolean
  }

  export type DeckCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    pokemonCard?: boolean | PokemonCardDefaultArgs<ExtArgs>
  }
  export type DeckCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    pokemonCard?: boolean | PokemonCardDefaultArgs<ExtArgs>
  }

  export type $DeckCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeckCard"
    objects: {
      deck: Prisma.$DeckPayload<ExtArgs>
      pokemonCard: Prisma.$PokemonCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deckId: number
      pokemonCardId: number
    }, ExtArgs["result"]["deckCard"]>
    composites: {}
  }

  type DeckCardGetPayload<S extends boolean | null | undefined | DeckCardDefaultArgs> = $Result.GetResult<Prisma.$DeckCardPayload, S>

  type DeckCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeckCardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeckCardCountAggregateInputType | true
    }

  export interface DeckCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeckCard'], meta: { name: 'DeckCard' } }
    /**
     * Find zero or one DeckCard that matches the filter.
     * @param {DeckCardFindUniqueArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckCardFindUniqueArgs>(args: SelectSubset<T, DeckCardFindUniqueArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DeckCard that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeckCardFindUniqueOrThrowArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckCardFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DeckCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardFindFirstArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckCardFindFirstArgs>(args?: SelectSubset<T, DeckCardFindFirstArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DeckCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardFindFirstOrThrowArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckCardFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DeckCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeckCards
     * const deckCards = await prisma.deckCard.findMany()
     * 
     * // Get first 10 DeckCards
     * const deckCards = await prisma.deckCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deckCardWithIdOnly = await prisma.deckCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeckCardFindManyArgs>(args?: SelectSubset<T, DeckCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DeckCard.
     * @param {DeckCardCreateArgs} args - Arguments to create a DeckCard.
     * @example
     * // Create one DeckCard
     * const DeckCard = await prisma.deckCard.create({
     *   data: {
     *     // ... data to create a DeckCard
     *   }
     * })
     * 
     */
    create<T extends DeckCardCreateArgs>(args: SelectSubset<T, DeckCardCreateArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DeckCards.
     * @param {DeckCardCreateManyArgs} args - Arguments to create many DeckCards.
     * @example
     * // Create many DeckCards
     * const deckCard = await prisma.deckCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckCardCreateManyArgs>(args?: SelectSubset<T, DeckCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeckCards and returns the data saved in the database.
     * @param {DeckCardCreateManyAndReturnArgs} args - Arguments to create many DeckCards.
     * @example
     * // Create many DeckCards
     * const deckCard = await prisma.deckCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeckCards and only return the `id`
     * const deckCardWithIdOnly = await prisma.deckCard.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeckCardCreateManyAndReturnArgs>(args?: SelectSubset<T, DeckCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DeckCard.
     * @param {DeckCardDeleteArgs} args - Arguments to delete one DeckCard.
     * @example
     * // Delete one DeckCard
     * const DeckCard = await prisma.deckCard.delete({
     *   where: {
     *     // ... filter to delete one DeckCard
     *   }
     * })
     * 
     */
    delete<T extends DeckCardDeleteArgs>(args: SelectSubset<T, DeckCardDeleteArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DeckCard.
     * @param {DeckCardUpdateArgs} args - Arguments to update one DeckCard.
     * @example
     * // Update one DeckCard
     * const deckCard = await prisma.deckCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckCardUpdateArgs>(args: SelectSubset<T, DeckCardUpdateArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DeckCards.
     * @param {DeckCardDeleteManyArgs} args - Arguments to filter DeckCards to delete.
     * @example
     * // Delete a few DeckCards
     * const { count } = await prisma.deckCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckCardDeleteManyArgs>(args?: SelectSubset<T, DeckCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeckCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeckCards
     * const deckCard = await prisma.deckCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckCardUpdateManyArgs>(args: SelectSubset<T, DeckCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeckCard.
     * @param {DeckCardUpsertArgs} args - Arguments to update or create a DeckCard.
     * @example
     * // Update or create a DeckCard
     * const deckCard = await prisma.deckCard.upsert({
     *   create: {
     *     // ... data to create a DeckCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeckCard we want to update
     *   }
     * })
     */
    upsert<T extends DeckCardUpsertArgs>(args: SelectSubset<T, DeckCardUpsertArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DeckCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardCountArgs} args - Arguments to filter DeckCards to count.
     * @example
     * // Count the number of DeckCards
     * const count = await prisma.deckCard.count({
     *   where: {
     *     // ... the filter for the DeckCards we want to count
     *   }
     * })
    **/
    count<T extends DeckCardCountArgs>(
      args?: Subset<T, DeckCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeckCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeckCardAggregateArgs>(args: Subset<T, DeckCardAggregateArgs>): Prisma.PrismaPromise<GetDeckCardAggregateType<T>>

    /**
     * Group by DeckCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardGroupByArgs} args - Group by arguments.
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
      T extends DeckCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckCardGroupByArgs['orderBy'] }
        : { orderBy?: DeckCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeckCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeckCard model
   */
  readonly fields: DeckCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeckCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deck<T extends DeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeckDefaultArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pokemonCard<T extends PokemonCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonCardDefaultArgs<ExtArgs>>): Prisma__PokemonCardClient<$Result.GetResult<Prisma.$PokemonCardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DeckCard model
   */ 
  interface DeckCardFieldRefs {
    readonly id: FieldRef<"DeckCard", 'Int'>
    readonly deckId: FieldRef<"DeckCard", 'Int'>
    readonly pokemonCardId: FieldRef<"DeckCard", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DeckCard findUnique
   */
  export type DeckCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard findUniqueOrThrow
   */
  export type DeckCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard findFirst
   */
  export type DeckCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckCards.
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckCards.
     */
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * DeckCard findFirstOrThrow
   */
  export type DeckCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckCards.
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckCards.
     */
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * DeckCard findMany
   */
  export type DeckCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCards to fetch.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeckCards.
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * DeckCard create
   */
  export type DeckCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * The data needed to create a DeckCard.
     */
    data: XOR<DeckCardCreateInput, DeckCardUncheckedCreateInput>
  }

  /**
   * DeckCard createMany
   */
  export type DeckCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeckCards.
     */
    data: DeckCardCreateManyInput | DeckCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeckCard createManyAndReturn
   */
  export type DeckCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DeckCards.
     */
    data: DeckCardCreateManyInput | DeckCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeckCard update
   */
  export type DeckCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * The data needed to update a DeckCard.
     */
    data: XOR<DeckCardUpdateInput, DeckCardUncheckedUpdateInput>
    /**
     * Choose, which DeckCard to update.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard updateMany
   */
  export type DeckCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeckCards.
     */
    data: XOR<DeckCardUpdateManyMutationInput, DeckCardUncheckedUpdateManyInput>
    /**
     * Filter which DeckCards to update
     */
    where?: DeckCardWhereInput
  }

  /**
   * DeckCard upsert
   */
  export type DeckCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * The filter to search for the DeckCard to update in case it exists.
     */
    where: DeckCardWhereUniqueInput
    /**
     * In case the DeckCard found by the `where` argument doesn't exist, create a new DeckCard with this data.
     */
    create: XOR<DeckCardCreateInput, DeckCardUncheckedCreateInput>
    /**
     * In case the DeckCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckCardUpdateInput, DeckCardUncheckedUpdateInput>
  }

  /**
   * DeckCard delete
   */
  export type DeckCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter which DeckCard to delete.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard deleteMany
   */
  export type DeckCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckCards to delete
     */
    where?: DeckCardWhereInput
  }

  /**
   * DeckCard without action
   */
  export type DeckCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
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


  export const PokemonCardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    pokedexId: 'pokedexId',
    type: 'type',
    lifePoints: 'lifePoints',
    size: 'size',
    weight: 'weight',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PokemonCardScalarFieldEnum = (typeof PokemonCardScalarFieldEnum)[keyof typeof PokemonCardScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeckScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeckScalarFieldEnum = (typeof DeckScalarFieldEnum)[keyof typeof DeckScalarFieldEnum]


  export const DeckCardScalarFieldEnum: {
    id: 'id',
    deckId: 'deckId',
    pokemonCardId: 'pokemonCardId'
  };

  export type DeckCardScalarFieldEnum = (typeof DeckCardScalarFieldEnum)[keyof typeof DeckCardScalarFieldEnum]


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
   * Reference to a field of type 'PokemonType'
   */
  export type EnumPokemonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PokemonType'>
    


  /**
   * Reference to a field of type 'PokemonType[]'
   */
  export type ListEnumPokemonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PokemonType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type PokemonCardWhereInput = {
    AND?: PokemonCardWhereInput | PokemonCardWhereInput[]
    OR?: PokemonCardWhereInput[]
    NOT?: PokemonCardWhereInput | PokemonCardWhereInput[]
    id?: IntFilter<"PokemonCard"> | number
    name?: StringFilter<"PokemonCard"> | string
    pokedexId?: IntFilter<"PokemonCard"> | number
    type?: EnumPokemonTypeFilter<"PokemonCard"> | $Enums.PokemonType
    lifePoints?: IntFilter<"PokemonCard"> | number
    size?: FloatNullableFilter<"PokemonCard"> | number | null
    weight?: FloatNullableFilter<"PokemonCard"> | number | null
    imageUrl?: StringNullableFilter<"PokemonCard"> | string | null
    createdAt?: DateTimeFilter<"PokemonCard"> | Date | string
    updatedAt?: DateTimeFilter<"PokemonCard"> | Date | string
    deckCards?: DeckCardListRelationFilter
  }

  export type PokemonCardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pokedexId?: SortOrder
    type?: SortOrder
    lifePoints?: SortOrder
    size?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deckCards?: DeckCardOrderByRelationAggregateInput
  }

  export type PokemonCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    pokedexId?: number
    AND?: PokemonCardWhereInput | PokemonCardWhereInput[]
    OR?: PokemonCardWhereInput[]
    NOT?: PokemonCardWhereInput | PokemonCardWhereInput[]
    type?: EnumPokemonTypeFilter<"PokemonCard"> | $Enums.PokemonType
    lifePoints?: IntFilter<"PokemonCard"> | number
    size?: FloatNullableFilter<"PokemonCard"> | number | null
    weight?: FloatNullableFilter<"PokemonCard"> | number | null
    imageUrl?: StringNullableFilter<"PokemonCard"> | string | null
    createdAt?: DateTimeFilter<"PokemonCard"> | Date | string
    updatedAt?: DateTimeFilter<"PokemonCard"> | Date | string
    deckCards?: DeckCardListRelationFilter
  }, "id" | "name" | "pokedexId">

  export type PokemonCardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    pokedexId?: SortOrder
    type?: SortOrder
    lifePoints?: SortOrder
    size?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PokemonCardCountOrderByAggregateInput
    _avg?: PokemonCardAvgOrderByAggregateInput
    _max?: PokemonCardMaxOrderByAggregateInput
    _min?: PokemonCardMinOrderByAggregateInput
    _sum?: PokemonCardSumOrderByAggregateInput
  }

  export type PokemonCardScalarWhereWithAggregatesInput = {
    AND?: PokemonCardScalarWhereWithAggregatesInput | PokemonCardScalarWhereWithAggregatesInput[]
    OR?: PokemonCardScalarWhereWithAggregatesInput[]
    NOT?: PokemonCardScalarWhereWithAggregatesInput | PokemonCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PokemonCard"> | number
    name?: StringWithAggregatesFilter<"PokemonCard"> | string
    pokedexId?: IntWithAggregatesFilter<"PokemonCard"> | number
    type?: EnumPokemonTypeWithAggregatesFilter<"PokemonCard"> | $Enums.PokemonType
    lifePoints?: IntWithAggregatesFilter<"PokemonCard"> | number
    size?: FloatNullableWithAggregatesFilter<"PokemonCard"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"PokemonCard"> | number | null
    imageUrl?: StringNullableWithAggregatesFilter<"PokemonCard"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PokemonCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PokemonCard"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    decks?: DeckListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    decks?: DeckOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    decks?: DeckListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DeckWhereInput = {
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    id?: IntFilter<"Deck"> | number
    name?: StringFilter<"Deck"> | string
    userId?: IntFilter<"Deck"> | number
    createdAt?: DateTimeFilter<"Deck"> | Date | string
    updatedAt?: DateTimeFilter<"Deck"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    deckCards?: DeckCardListRelationFilter
  }

  export type DeckOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    deckCards?: DeckCardOrderByRelationAggregateInput
  }

  export type DeckWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    name?: StringFilter<"Deck"> | string
    userId?: IntFilter<"Deck"> | number
    createdAt?: DateTimeFilter<"Deck"> | Date | string
    updatedAt?: DateTimeFilter<"Deck"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    deckCards?: DeckCardListRelationFilter
  }, "id">

  export type DeckOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeckCountOrderByAggregateInput
    _avg?: DeckAvgOrderByAggregateInput
    _max?: DeckMaxOrderByAggregateInput
    _min?: DeckMinOrderByAggregateInput
    _sum?: DeckSumOrderByAggregateInput
  }

  export type DeckScalarWhereWithAggregatesInput = {
    AND?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    OR?: DeckScalarWhereWithAggregatesInput[]
    NOT?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deck"> | number
    name?: StringWithAggregatesFilter<"Deck"> | string
    userId?: IntWithAggregatesFilter<"Deck"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Deck"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deck"> | Date | string
  }

  export type DeckCardWhereInput = {
    AND?: DeckCardWhereInput | DeckCardWhereInput[]
    OR?: DeckCardWhereInput[]
    NOT?: DeckCardWhereInput | DeckCardWhereInput[]
    id?: IntFilter<"DeckCard"> | number
    deckId?: IntFilter<"DeckCard"> | number
    pokemonCardId?: IntFilter<"DeckCard"> | number
    deck?: XOR<DeckRelationFilter, DeckWhereInput>
    pokemonCard?: XOR<PokemonCardRelationFilter, PokemonCardWhereInput>
  }

  export type DeckCardOrderByWithRelationInput = {
    id?: SortOrder
    deckId?: SortOrder
    pokemonCardId?: SortOrder
    deck?: DeckOrderByWithRelationInput
    pokemonCard?: PokemonCardOrderByWithRelationInput
  }

  export type DeckCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeckCardWhereInput | DeckCardWhereInput[]
    OR?: DeckCardWhereInput[]
    NOT?: DeckCardWhereInput | DeckCardWhereInput[]
    deckId?: IntFilter<"DeckCard"> | number
    pokemonCardId?: IntFilter<"DeckCard"> | number
    deck?: XOR<DeckRelationFilter, DeckWhereInput>
    pokemonCard?: XOR<PokemonCardRelationFilter, PokemonCardWhereInput>
  }, "id">

  export type DeckCardOrderByWithAggregationInput = {
    id?: SortOrder
    deckId?: SortOrder
    pokemonCardId?: SortOrder
    _count?: DeckCardCountOrderByAggregateInput
    _avg?: DeckCardAvgOrderByAggregateInput
    _max?: DeckCardMaxOrderByAggregateInput
    _min?: DeckCardMinOrderByAggregateInput
    _sum?: DeckCardSumOrderByAggregateInput
  }

  export type DeckCardScalarWhereWithAggregatesInput = {
    AND?: DeckCardScalarWhereWithAggregatesInput | DeckCardScalarWhereWithAggregatesInput[]
    OR?: DeckCardScalarWhereWithAggregatesInput[]
    NOT?: DeckCardScalarWhereWithAggregatesInput | DeckCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeckCard"> | number
    deckId?: IntWithAggregatesFilter<"DeckCard"> | number
    pokemonCardId?: IntWithAggregatesFilter<"DeckCard"> | number
  }

  export type PokemonCardCreateInput = {
    name: string
    pokedexId: number
    type: $Enums.PokemonType
    lifePoints: number
    size?: number | null
    weight?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deckCards?: DeckCardCreateNestedManyWithoutPokemonCardInput
  }

  export type PokemonCardUncheckedCreateInput = {
    id?: number
    name: string
    pokedexId: number
    type: $Enums.PokemonType
    lifePoints: number
    size?: number | null
    weight?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deckCards?: DeckCardUncheckedCreateNestedManyWithoutPokemonCardInput
  }

  export type PokemonCardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pokedexId?: IntFieldUpdateOperationsInput | number
    type?: EnumPokemonTypeFieldUpdateOperationsInput | $Enums.PokemonType
    lifePoints?: IntFieldUpdateOperationsInput | number
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deckCards?: DeckCardUpdateManyWithoutPokemonCardNestedInput
  }

  export type PokemonCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pokedexId?: IntFieldUpdateOperationsInput | number
    type?: EnumPokemonTypeFieldUpdateOperationsInput | $Enums.PokemonType
    lifePoints?: IntFieldUpdateOperationsInput | number
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deckCards?: DeckCardUncheckedUpdateManyWithoutPokemonCardNestedInput
  }

  export type PokemonCardCreateManyInput = {
    id?: number
    name: string
    pokedexId: number
    type: $Enums.PokemonType
    lifePoints: number
    size?: number | null
    weight?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PokemonCardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    pokedexId?: IntFieldUpdateOperationsInput | number
    type?: EnumPokemonTypeFieldUpdateOperationsInput | $Enums.PokemonType
    lifePoints?: IntFieldUpdateOperationsInput | number
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pokedexId?: IntFieldUpdateOperationsInput | number
    type?: EnumPokemonTypeFieldUpdateOperationsInput | $Enums.PokemonType
    lifePoints?: IntFieldUpdateOperationsInput | number
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    decks?: DeckCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    decks?: DeckUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decks?: DeckUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decks?: DeckUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDecksInput
    deckCards?: DeckCardCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deckCards?: DeckCardUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDecksNestedInput
    deckCards?: DeckCardUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deckCards?: DeckCardUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckCreateManyInput = {
    id?: number
    name: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeckUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckCardCreateInput = {
    deck: DeckCreateNestedOneWithoutDeckCardsInput
    pokemonCard: PokemonCardCreateNestedOneWithoutDeckCardsInput
  }

  export type DeckCardUncheckedCreateInput = {
    id?: number
    deckId: number
    pokemonCardId: number
  }

  export type DeckCardUpdateInput = {
    deck?: DeckUpdateOneRequiredWithoutDeckCardsNestedInput
    pokemonCard?: PokemonCardUpdateOneRequiredWithoutDeckCardsNestedInput
  }

  export type DeckCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deckId?: IntFieldUpdateOperationsInput | number
    pokemonCardId?: IntFieldUpdateOperationsInput | number
  }

  export type DeckCardCreateManyInput = {
    id?: number
    deckId: number
    pokemonCardId: number
  }

  export type DeckCardUpdateManyMutationInput = {

  }

  export type DeckCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deckId?: IntFieldUpdateOperationsInput | number
    pokemonCardId?: IntFieldUpdateOperationsInput | number
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

  export type EnumPokemonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PokemonType | EnumPokemonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PokemonType[] | ListEnumPokemonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PokemonType[] | ListEnumPokemonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPokemonTypeFilter<$PrismaModel> | $Enums.PokemonType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type DeckCardListRelationFilter = {
    every?: DeckCardWhereInput
    some?: DeckCardWhereInput
    none?: DeckCardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeckCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PokemonCardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pokedexId?: SortOrder
    type?: SortOrder
    lifePoints?: SortOrder
    size?: SortOrder
    weight?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PokemonCardAvgOrderByAggregateInput = {
    id?: SortOrder
    pokedexId?: SortOrder
    lifePoints?: SortOrder
    size?: SortOrder
    weight?: SortOrder
  }

  export type PokemonCardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pokedexId?: SortOrder
    type?: SortOrder
    lifePoints?: SortOrder
    size?: SortOrder
    weight?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PokemonCardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pokedexId?: SortOrder
    type?: SortOrder
    lifePoints?: SortOrder
    size?: SortOrder
    weight?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PokemonCardSumOrderByAggregateInput = {
    id?: SortOrder
    pokedexId?: SortOrder
    lifePoints?: SortOrder
    size?: SortOrder
    weight?: SortOrder
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

  export type EnumPokemonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PokemonType | EnumPokemonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PokemonType[] | ListEnumPokemonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PokemonType[] | ListEnumPokemonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPokemonTypeWithAggregatesFilter<$PrismaModel> | $Enums.PokemonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPokemonTypeFilter<$PrismaModel>
    _max?: NestedEnumPokemonTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type DeckListRelationFilter = {
    every?: DeckWhereInput
    some?: DeckWhereInput
    none?: DeckWhereInput
  }

  export type DeckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeckCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeckAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DeckMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeckMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeckSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DeckRelationFilter = {
    is?: DeckWhereInput
    isNot?: DeckWhereInput
  }

  export type PokemonCardRelationFilter = {
    is?: PokemonCardWhereInput
    isNot?: PokemonCardWhereInput
  }

  export type DeckCardCountOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    pokemonCardId?: SortOrder
  }

  export type DeckCardAvgOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    pokemonCardId?: SortOrder
  }

  export type DeckCardMaxOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    pokemonCardId?: SortOrder
  }

  export type DeckCardMinOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    pokemonCardId?: SortOrder
  }

  export type DeckCardSumOrderByAggregateInput = {
    id?: SortOrder
    deckId?: SortOrder
    pokemonCardId?: SortOrder
  }

  export type DeckCardCreateNestedManyWithoutPokemonCardInput = {
    create?: XOR<DeckCardCreateWithoutPokemonCardInput, DeckCardUncheckedCreateWithoutPokemonCardInput> | DeckCardCreateWithoutPokemonCardInput[] | DeckCardUncheckedCreateWithoutPokemonCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutPokemonCardInput | DeckCardCreateOrConnectWithoutPokemonCardInput[]
    createMany?: DeckCardCreateManyPokemonCardInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type DeckCardUncheckedCreateNestedManyWithoutPokemonCardInput = {
    create?: XOR<DeckCardCreateWithoutPokemonCardInput, DeckCardUncheckedCreateWithoutPokemonCardInput> | DeckCardCreateWithoutPokemonCardInput[] | DeckCardUncheckedCreateWithoutPokemonCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutPokemonCardInput | DeckCardCreateOrConnectWithoutPokemonCardInput[]
    createMany?: DeckCardCreateManyPokemonCardInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPokemonTypeFieldUpdateOperationsInput = {
    set?: $Enums.PokemonType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeckCardUpdateManyWithoutPokemonCardNestedInput = {
    create?: XOR<DeckCardCreateWithoutPokemonCardInput, DeckCardUncheckedCreateWithoutPokemonCardInput> | DeckCardCreateWithoutPokemonCardInput[] | DeckCardUncheckedCreateWithoutPokemonCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutPokemonCardInput | DeckCardCreateOrConnectWithoutPokemonCardInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutPokemonCardInput | DeckCardUpsertWithWhereUniqueWithoutPokemonCardInput[]
    createMany?: DeckCardCreateManyPokemonCardInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutPokemonCardInput | DeckCardUpdateWithWhereUniqueWithoutPokemonCardInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutPokemonCardInput | DeckCardUpdateManyWithWhereWithoutPokemonCardInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type DeckCardUncheckedUpdateManyWithoutPokemonCardNestedInput = {
    create?: XOR<DeckCardCreateWithoutPokemonCardInput, DeckCardUncheckedCreateWithoutPokemonCardInput> | DeckCardCreateWithoutPokemonCardInput[] | DeckCardUncheckedCreateWithoutPokemonCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutPokemonCardInput | DeckCardCreateOrConnectWithoutPokemonCardInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutPokemonCardInput | DeckCardUpsertWithWhereUniqueWithoutPokemonCardInput[]
    createMany?: DeckCardCreateManyPokemonCardInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutPokemonCardInput | DeckCardUpdateWithWhereUniqueWithoutPokemonCardInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutPokemonCardInput | DeckCardUpdateManyWithWhereWithoutPokemonCardInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type DeckCreateNestedManyWithoutUserInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type DeckUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
  }

  export type DeckUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutUserInput | DeckUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutUserInput | DeckUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutUserInput | DeckUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type DeckUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput> | DeckCreateWithoutUserInput[] | DeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeckCreateOrConnectWithoutUserInput | DeckCreateOrConnectWithoutUserInput[]
    upsert?: DeckUpsertWithWhereUniqueWithoutUserInput | DeckUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeckCreateManyUserInputEnvelope
    set?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    disconnect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    delete?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    connect?: DeckWhereUniqueInput | DeckWhereUniqueInput[]
    update?: DeckUpdateWithWhereUniqueWithoutUserInput | DeckUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeckUpdateManyWithWhereWithoutUserInput | DeckUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeckScalarWhereInput | DeckScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDecksInput = {
    create?: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput
    connect?: UserWhereUniqueInput
  }

  export type DeckCardCreateNestedManyWithoutDeckInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type DeckCardUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDecksNestedInput = {
    create?: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput
    upsert?: UserUpsertWithoutDecksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDecksInput, UserUpdateWithoutDecksInput>, UserUncheckedUpdateWithoutDecksInput>
  }

  export type DeckCardUpdateManyWithoutDeckNestedInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutDeckInput | DeckCardUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutDeckInput | DeckCardUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutDeckInput | DeckCardUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type DeckCardUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutDeckInput | DeckCardUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutDeckInput | DeckCardUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutDeckInput | DeckCardUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type DeckCreateNestedOneWithoutDeckCardsInput = {
    create?: XOR<DeckCreateWithoutDeckCardsInput, DeckUncheckedCreateWithoutDeckCardsInput>
    connectOrCreate?: DeckCreateOrConnectWithoutDeckCardsInput
    connect?: DeckWhereUniqueInput
  }

  export type PokemonCardCreateNestedOneWithoutDeckCardsInput = {
    create?: XOR<PokemonCardCreateWithoutDeckCardsInput, PokemonCardUncheckedCreateWithoutDeckCardsInput>
    connectOrCreate?: PokemonCardCreateOrConnectWithoutDeckCardsInput
    connect?: PokemonCardWhereUniqueInput
  }

  export type DeckUpdateOneRequiredWithoutDeckCardsNestedInput = {
    create?: XOR<DeckCreateWithoutDeckCardsInput, DeckUncheckedCreateWithoutDeckCardsInput>
    connectOrCreate?: DeckCreateOrConnectWithoutDeckCardsInput
    upsert?: DeckUpsertWithoutDeckCardsInput
    connect?: DeckWhereUniqueInput
    update?: XOR<XOR<DeckUpdateToOneWithWhereWithoutDeckCardsInput, DeckUpdateWithoutDeckCardsInput>, DeckUncheckedUpdateWithoutDeckCardsInput>
  }

  export type PokemonCardUpdateOneRequiredWithoutDeckCardsNestedInput = {
    create?: XOR<PokemonCardCreateWithoutDeckCardsInput, PokemonCardUncheckedCreateWithoutDeckCardsInput>
    connectOrCreate?: PokemonCardCreateOrConnectWithoutDeckCardsInput
    upsert?: PokemonCardUpsertWithoutDeckCardsInput
    connect?: PokemonCardWhereUniqueInput
    update?: XOR<XOR<PokemonCardUpdateToOneWithWhereWithoutDeckCardsInput, PokemonCardUpdateWithoutDeckCardsInput>, PokemonCardUncheckedUpdateWithoutDeckCardsInput>
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

  export type NestedEnumPokemonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PokemonType | EnumPokemonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PokemonType[] | ListEnumPokemonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PokemonType[] | ListEnumPokemonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPokemonTypeFilter<$PrismaModel> | $Enums.PokemonType
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

  export type NestedEnumPokemonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PokemonType | EnumPokemonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PokemonType[] | ListEnumPokemonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PokemonType[] | ListEnumPokemonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPokemonTypeWithAggregatesFilter<$PrismaModel> | $Enums.PokemonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPokemonTypeFilter<$PrismaModel>
    _max?: NestedEnumPokemonTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type DeckCardCreateWithoutPokemonCardInput = {
    deck: DeckCreateNestedOneWithoutDeckCardsInput
  }

  export type DeckCardUncheckedCreateWithoutPokemonCardInput = {
    id?: number
    deckId: number
  }

  export type DeckCardCreateOrConnectWithoutPokemonCardInput = {
    where: DeckCardWhereUniqueInput
    create: XOR<DeckCardCreateWithoutPokemonCardInput, DeckCardUncheckedCreateWithoutPokemonCardInput>
  }

  export type DeckCardCreateManyPokemonCardInputEnvelope = {
    data: DeckCardCreateManyPokemonCardInput | DeckCardCreateManyPokemonCardInput[]
    skipDuplicates?: boolean
  }

  export type DeckCardUpsertWithWhereUniqueWithoutPokemonCardInput = {
    where: DeckCardWhereUniqueInput
    update: XOR<DeckCardUpdateWithoutPokemonCardInput, DeckCardUncheckedUpdateWithoutPokemonCardInput>
    create: XOR<DeckCardCreateWithoutPokemonCardInput, DeckCardUncheckedCreateWithoutPokemonCardInput>
  }

  export type DeckCardUpdateWithWhereUniqueWithoutPokemonCardInput = {
    where: DeckCardWhereUniqueInput
    data: XOR<DeckCardUpdateWithoutPokemonCardInput, DeckCardUncheckedUpdateWithoutPokemonCardInput>
  }

  export type DeckCardUpdateManyWithWhereWithoutPokemonCardInput = {
    where: DeckCardScalarWhereInput
    data: XOR<DeckCardUpdateManyMutationInput, DeckCardUncheckedUpdateManyWithoutPokemonCardInput>
  }

  export type DeckCardScalarWhereInput = {
    AND?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
    OR?: DeckCardScalarWhereInput[]
    NOT?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
    id?: IntFilter<"DeckCard"> | number
    deckId?: IntFilter<"DeckCard"> | number
    pokemonCardId?: IntFilter<"DeckCard"> | number
  }

  export type DeckCreateWithoutUserInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deckCards?: DeckCardCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deckCards?: DeckCardUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckCreateOrConnectWithoutUserInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput>
  }

  export type DeckCreateManyUserInputEnvelope = {
    data: DeckCreateManyUserInput | DeckCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeckUpsertWithWhereUniqueWithoutUserInput = {
    where: DeckWhereUniqueInput
    update: XOR<DeckUpdateWithoutUserInput, DeckUncheckedUpdateWithoutUserInput>
    create: XOR<DeckCreateWithoutUserInput, DeckUncheckedCreateWithoutUserInput>
  }

  export type DeckUpdateWithWhereUniqueWithoutUserInput = {
    where: DeckWhereUniqueInput
    data: XOR<DeckUpdateWithoutUserInput, DeckUncheckedUpdateWithoutUserInput>
  }

  export type DeckUpdateManyWithWhereWithoutUserInput = {
    where: DeckScalarWhereInput
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyWithoutUserInput>
  }

  export type DeckScalarWhereInput = {
    AND?: DeckScalarWhereInput | DeckScalarWhereInput[]
    OR?: DeckScalarWhereInput[]
    NOT?: DeckScalarWhereInput | DeckScalarWhereInput[]
    id?: IntFilter<"Deck"> | number
    name?: StringFilter<"Deck"> | string
    userId?: IntFilter<"Deck"> | number
    createdAt?: DateTimeFilter<"Deck"> | Date | string
    updatedAt?: DateTimeFilter<"Deck"> | Date | string
  }

  export type UserCreateWithoutDecksInput = {
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutDecksInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDecksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
  }

  export type DeckCardCreateWithoutDeckInput = {
    pokemonCard: PokemonCardCreateNestedOneWithoutDeckCardsInput
  }

  export type DeckCardUncheckedCreateWithoutDeckInput = {
    id?: number
    pokemonCardId: number
  }

  export type DeckCardCreateOrConnectWithoutDeckInput = {
    where: DeckCardWhereUniqueInput
    create: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput>
  }

  export type DeckCardCreateManyDeckInputEnvelope = {
    data: DeckCardCreateManyDeckInput | DeckCardCreateManyDeckInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDecksInput = {
    update: XOR<UserUpdateWithoutDecksInput, UserUncheckedUpdateWithoutDecksInput>
    create: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDecksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDecksInput, UserUncheckedUpdateWithoutDecksInput>
  }

  export type UserUpdateWithoutDecksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutDecksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckCardUpsertWithWhereUniqueWithoutDeckInput = {
    where: DeckCardWhereUniqueInput
    update: XOR<DeckCardUpdateWithoutDeckInput, DeckCardUncheckedUpdateWithoutDeckInput>
    create: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput>
  }

  export type DeckCardUpdateWithWhereUniqueWithoutDeckInput = {
    where: DeckCardWhereUniqueInput
    data: XOR<DeckCardUpdateWithoutDeckInput, DeckCardUncheckedUpdateWithoutDeckInput>
  }

  export type DeckCardUpdateManyWithWhereWithoutDeckInput = {
    where: DeckCardScalarWhereInput
    data: XOR<DeckCardUpdateManyMutationInput, DeckCardUncheckedUpdateManyWithoutDeckInput>
  }

  export type DeckCreateWithoutDeckCardsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDecksInput
  }

  export type DeckUncheckedCreateWithoutDeckCardsInput = {
    id?: number
    name: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeckCreateOrConnectWithoutDeckCardsInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutDeckCardsInput, DeckUncheckedCreateWithoutDeckCardsInput>
  }

  export type PokemonCardCreateWithoutDeckCardsInput = {
    name: string
    pokedexId: number
    type: $Enums.PokemonType
    lifePoints: number
    size?: number | null
    weight?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PokemonCardUncheckedCreateWithoutDeckCardsInput = {
    id?: number
    name: string
    pokedexId: number
    type: $Enums.PokemonType
    lifePoints: number
    size?: number | null
    weight?: number | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PokemonCardCreateOrConnectWithoutDeckCardsInput = {
    where: PokemonCardWhereUniqueInput
    create: XOR<PokemonCardCreateWithoutDeckCardsInput, PokemonCardUncheckedCreateWithoutDeckCardsInput>
  }

  export type DeckUpsertWithoutDeckCardsInput = {
    update: XOR<DeckUpdateWithoutDeckCardsInput, DeckUncheckedUpdateWithoutDeckCardsInput>
    create: XOR<DeckCreateWithoutDeckCardsInput, DeckUncheckedCreateWithoutDeckCardsInput>
    where?: DeckWhereInput
  }

  export type DeckUpdateToOneWithWhereWithoutDeckCardsInput = {
    where?: DeckWhereInput
    data: XOR<DeckUpdateWithoutDeckCardsInput, DeckUncheckedUpdateWithoutDeckCardsInput>
  }

  export type DeckUpdateWithoutDeckCardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDecksNestedInput
  }

  export type DeckUncheckedUpdateWithoutDeckCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonCardUpsertWithoutDeckCardsInput = {
    update: XOR<PokemonCardUpdateWithoutDeckCardsInput, PokemonCardUncheckedUpdateWithoutDeckCardsInput>
    create: XOR<PokemonCardCreateWithoutDeckCardsInput, PokemonCardUncheckedCreateWithoutDeckCardsInput>
    where?: PokemonCardWhereInput
  }

  export type PokemonCardUpdateToOneWithWhereWithoutDeckCardsInput = {
    where?: PokemonCardWhereInput
    data: XOR<PokemonCardUpdateWithoutDeckCardsInput, PokemonCardUncheckedUpdateWithoutDeckCardsInput>
  }

  export type PokemonCardUpdateWithoutDeckCardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    pokedexId?: IntFieldUpdateOperationsInput | number
    type?: EnumPokemonTypeFieldUpdateOperationsInput | $Enums.PokemonType
    lifePoints?: IntFieldUpdateOperationsInput | number
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonCardUncheckedUpdateWithoutDeckCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pokedexId?: IntFieldUpdateOperationsInput | number
    type?: EnumPokemonTypeFieldUpdateOperationsInput | $Enums.PokemonType
    lifePoints?: IntFieldUpdateOperationsInput | number
    size?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckCardCreateManyPokemonCardInput = {
    id?: number
    deckId: number
  }

  export type DeckCardUpdateWithoutPokemonCardInput = {
    deck?: DeckUpdateOneRequiredWithoutDeckCardsNestedInput
  }

  export type DeckCardUncheckedUpdateWithoutPokemonCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    deckId?: IntFieldUpdateOperationsInput | number
  }

  export type DeckCardUncheckedUpdateManyWithoutPokemonCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    deckId?: IntFieldUpdateOperationsInput | number
  }

  export type DeckCreateManyUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeckUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deckCards?: DeckCardUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deckCards?: DeckCardUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckCardCreateManyDeckInput = {
    id?: number
    pokemonCardId: number
  }

  export type DeckCardUpdateWithoutDeckInput = {
    pokemonCard?: PokemonCardUpdateOneRequiredWithoutDeckCardsNestedInput
  }

  export type DeckCardUncheckedUpdateWithoutDeckInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemonCardId?: IntFieldUpdateOperationsInput | number
  }

  export type DeckCardUncheckedUpdateManyWithoutDeckInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemonCardId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PokemonCardCountOutputTypeDefaultArgs instead
     */
    export type PokemonCardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PokemonCardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeckCountOutputTypeDefaultArgs instead
     */
    export type DeckCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeckCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PokemonCardDefaultArgs instead
     */
    export type PokemonCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PokemonCardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeckDefaultArgs instead
     */
    export type DeckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeckDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeckCardDefaultArgs instead
     */
    export type DeckCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeckCardDefaultArgs<ExtArgs>

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