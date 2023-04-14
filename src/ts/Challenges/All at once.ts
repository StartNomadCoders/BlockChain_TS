declare module "lodash" {

    function head<T>(array:T[]|null|undefined):T|undefined {
        return (array != null && array.length)
            ? array[0]
            : undefined
    }

    function hasIn<T extends object, K extends keyof T>(object: T | null | undefined, key: K): boolean {
        return object != null && key in object;
    }
    function isBoolean<T>(value: T):boolean {
        return value === true || value === false ||
            (isObjectLike(value) && getTag(value) == '[object Boolean]');
    }

    function toString<T>(value:T):string {
        if (value == null) {
            return ''
        }
        // Exit early for strings to avoid a performance hit in some environments.
        if (typeof value === 'string') {
            return value
        }
        if (Array.isArray(value)) {
            // Recursively convert values (susceptible to call stack limits).
            return `${value.map((other) => other == null ? other : toString(other))}`
        }
        if (isSymbol(value)) {
            return value.toString()
        }
        const result = `${value}`
        return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
    }

    function split<T>(string:T, separator:T, limit:T):T[] {
        limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0
        if (!limit) {
            return []
        }
        if (string && (
            typeof separator === 'string' ||
            (separator != null && !isRegExp(separator))
        )) {
            if (!separator && hasUnicode(string)) {
                return castSlice(stringToArray(string), 0, limit)
            }
        }
        return string.split(separator, limit)
    }

    function hasPath<T extends object>(object: T, path: T[]): boolean {
        path = castPath(path, object)

        let index = -1
        let { length } = path
        let result = false
        let key

        while (++index < length) {
            key = toKey(path[index])
            if (!(result = object != null && hasOwnProperty.call(object, key))) {
                break
            }
            object = object[key]
        }
        if (result || ++index != length) {
            return result
        }
        length = object == null ? 0 : object.length
        return !!length && isLength(length) && isIndex(key, length) &&
            (Array.isArray(object) || isArguments(object))
    }


    function filter<T>(array : T[] , predicate : T) : T[] | Object {
        let index = -1
        let resIndex = 0
        const length = array == null ? 0 : array.length
        const result = []

        while (++index < length) {
            const value = array[index]
            if (predicate(value, index, array)) {
                result[resIndex++] = value
            }
        }
        return result
    }

    function every<T>(array :T[], predicate:T):boolean {
        let index = -1
        const length = array == null ? 0 : array.length

        while (++index < length) {
            if (!predicate(array[index], index, array)) {
                return false
            }
        }
        return true
    }
    function map<T>(array:T[], iteratee:T):T[] {
        let index = -1
        const length = array == null ? 0 : array.length
        const result = new Array(length)

        while (++index < length) {
            result[index] = iteratee(array[index], index, array)
        }
        return result
    }