package com.example.oauthauthorization.domain.service;

import org.springframework.security.oauth2.provider.client.BaseClientDetails;

import com.example.oauthauthorization.domain.model.Client;

public class OAuthClientDetails extends BaseClientDetails{
    private Client client;

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

}
