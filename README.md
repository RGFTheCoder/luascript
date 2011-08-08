# LuaScript

Translate Lua 5.2 to Javascript.

## Intrinsic limitations

Obviously, porting Lua to JavaScript has some feature limitations. Some of those limitations are obvious, like access to C endpoints, but some are not. These section outlines those limitations.

### Syntax limitations

Those are limitations that happen at the syntax level:

* Returning more than one value in a function is theoretically possible, but would greatly impact performance and therefore is disabled:

        function example()
          return 1, 2
        end

  Maybe ECMAScript Harmony will provide tools to make this more viable;

* goto statements may be implemented, but are not supported on first versions;

### STDLIB limitations

Limitations regarding STDLIB methods:

* setmetatable does not support modifying __index and __newindex. ECMAScript's proxies will likely make this possible;

* setfenv is not supported and probably never will;