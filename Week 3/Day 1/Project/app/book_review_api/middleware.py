from fastapi import Request, HTTPException
from starlette.middleware.base import BaseHTTPMiddleware
from jose import jwt, JWTError

class AuthMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        """Intercept every request and validate JWT authentication"""
        if request.url.path in ["/signup", "/login"]:
            return await call_next(request)

        token = request.headers.get("Authorization")
        if not token:
            raise HTTPException(status_code=403, detail="No auth token provided")

        try:
            payload = jwt.decode(token.split(" ")[1], SECRET_KEY, algorithms=[ALGORITHM])
            request.state.user = payload
        except JWTError:
            raise HTTPException(status_code=403, detail="Invalid token")

        return await call_next(request)
