package com.dev.mycourseapp.controler;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/user/me")
    public OidcUser getCurrentUser(@AuthenticationPrincipal OidcUser user) {
        return user;
    }
}

