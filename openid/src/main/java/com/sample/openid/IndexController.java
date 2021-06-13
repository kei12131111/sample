package com.sample.openid;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

	@GetMapping("/")
	public String index(@AuthenticationPrincipal OidcUser user, Model model) {
	    model.addAttribute("username", user.getFullName());

		return "index";
	}
}
