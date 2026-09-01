// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserPoolDomainProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#custom_domain_config CcUserPoolDomain#custom_domain_config}
    */
    readonly customDomainConfig?: CcUserPoolDomain.CustomDomainConfigTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#domain CcUserPoolDomain#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#managed_login_version CcUserPoolDomain#managed_login_version}
    */
    readonly managedLoginVersion?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#routing CcUserPoolDomain#routing}
    */
    readonly routing?: CcUserPoolDomain.RoutingTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#user_pool_id CcUserPoolDomain#user_pool_id}
    */
    readonly userPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain awscc_cognito_user_pool_domain}
*/
export class CcUserPoolDomain extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_user_pool_domain";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserPoolDomain resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserPoolDomain to import
    * @param importFromId The id of the existing CcUserPoolDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserPoolDomain to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_domain", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain awscc_cognito_user_pool_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserPoolDomainProps
    */
    public constructor(scope: Construct, id: string, config: CcUserPoolDomainProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_user_pool_domain',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._customDomainConfig.internalValue = config.customDomainConfig;
        this._domain = config.domain;
        this._managedLoginVersion = config.managedLoginVersion;
        this._routing.internalValue = config.routing;
        this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cloudfront_distribution - computed: true, optional: false, required: false
    public get cloudfrontDistribution() {
        return this.getStringAttribute('cloudfront_distribution');
    }

    // custom_domain_config - computed: true, optional: true, required: false
    private _customDomainConfig = new CcUserPoolDomain.CustomDomainConfigTypePropertyOutputReference(this, "custom_domain_config");
    public get customDomainConfig() {
        return this._customDomainConfig;
    }
    public putCustomDomainConfig(value: CcUserPoolDomain.CustomDomainConfigTypeProperty) {
        this._customDomainConfig.internalValue = value;
    }
    public resetCustomDomainConfig() {
        this._customDomainConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDomainConfigInput() {
        return this._customDomainConfig.internalValue;
    }

    // domain - computed: false, optional: false, required: true
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // managed_login_version - computed: true, optional: true, required: false
    private _managedLoginVersion?: number; 
    public get managedLoginVersion() {
        return this.getNumberAttribute('managed_login_version');
    }
    public set managedLoginVersion(value: number) {
        this._managedLoginVersion = value;
    }
    public resetManagedLoginVersion() {
        this._managedLoginVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedLoginVersionInput() {
        return this._managedLoginVersion;
    }

    // routing - computed: true, optional: true, required: false
    private _routing = new CcUserPoolDomain.RoutingTypePropertyOutputReference(this, "routing");
    public get routing() {
        return this._routing;
    }
    public putRouting(value: CcUserPoolDomain.RoutingTypeProperty) {
        this._routing.internalValue = value;
    }
    public resetRouting() {
        this._routing.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingInput() {
        return this._routing.internalValue;
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            custom_domain_config: ccUserPoolDomainCustomDomainConfigTypePropertyToTerraform(this._customDomainConfig.internalValue),
            domain: cdktn.stringToTerraform(this._domain),
            managed_login_version: cdktn.numberToTerraform(this._managedLoginVersion),
            routing: ccUserPoolDomainRoutingTypePropertyToTerraform(this._routing.internalValue),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            custom_domain_config: {
                value: ccUserPoolDomainCustomDomainConfigTypePropertyToHclTerraform(this._customDomainConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserPoolDomain.CustomDomainConfigTypeProperty",
            },
            domain: {
                value: cdktn.stringToHclTerraform(this._domain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            managed_login_version: {
                value: cdktn.numberToHclTerraform(this._managedLoginVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            routing: {
                value: ccUserPoolDomainRoutingTypePropertyToHclTerraform(this._routing.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUserPoolDomain.RoutingTypeProperty",
            },
            user_pool_id: {
                value: cdktn.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserPoolDomainCustomDomainConfigTypePropertyToTerraform(struct?: CcUserPoolDomain.CustomDomainConfigTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        security_policy: cdktn.stringToTerraform(struct!.securityPolicy),
    }
}


export function ccUserPoolDomainCustomDomainConfigTypePropertyToHclTerraform(struct?: CcUserPoolDomain.CustomDomainConfigTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_policy: {
            value: cdktn.stringToHclTerraform(struct!.securityPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolDomainFailoverTypePropertyToTerraform(struct?: CcUserPoolDomain.FailoverTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        primary_route_53_health_check_id: cdktn.stringToTerraform(struct!.primaryRoute53HealthCheckId),
        secondary_region: cdktn.stringToTerraform(struct!.secondaryRegion),
    }
}


export function ccUserPoolDomainFailoverTypePropertyToHclTerraform(struct?: CcUserPoolDomain.FailoverTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        primary_route_53_health_check_id: {
            value: cdktn.stringToHclTerraform(struct!.primaryRoute53HealthCheckId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secondary_region: {
            value: cdktn.stringToHclTerraform(struct!.secondaryRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccUserPoolDomainRoutingTypePropertyToTerraform(struct?: CcUserPoolDomain.RoutingTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        failover: ccUserPoolDomainFailoverTypePropertyToTerraform(struct!.failover),
    }
}


export function ccUserPoolDomainRoutingTypePropertyToHclTerraform(struct?: CcUserPoolDomain.RoutingTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        failover: {
            value: ccUserPoolDomainFailoverTypePropertyToHclTerraform(struct!.failover),
            isBlock: true,
            type: "struct",
            storageClassType: "FailoverTypeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcUserPoolDomain {
export interface CustomDomainConfigTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#certificate_arn CcUserPoolDomain#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#security_policy CcUserPoolDomain#security_policy}
    */
    readonly securityPolicy?: string;
}
export class CustomDomainConfigTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomDomainConfigTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._securityPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityPolicy = this._securityPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomDomainConfigTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
            this._securityPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
            this._securityPolicy = value.securityPolicy;
        }
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
    }

    // security_policy - computed: true, optional: true, required: false
    private _securityPolicy?: string; 
    public get securityPolicy() {
        return this.getStringAttribute('security_policy');
    }
    public set securityPolicy(value: string) {
        this._securityPolicy = value;
    }
    public resetSecurityPolicy() {
        this._securityPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityPolicyInput() {
        return this._securityPolicy;
    }
}
export interface FailoverTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#primary_route_53_health_check_id CcUserPoolDomain#primary_route_53_health_check_id}
    */
    readonly primaryRoute53HealthCheckId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#secondary_region CcUserPoolDomain#secondary_region}
    */
    readonly secondaryRegion?: string;
}
export class FailoverTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FailoverTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._primaryRoute53HealthCheckId !== undefined) {
            hasAnyValues = true;
            internalValueResult.primaryRoute53HealthCheckId = this._primaryRoute53HealthCheckId;
        }
        if (this._secondaryRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondaryRegion = this._secondaryRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FailoverTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._primaryRoute53HealthCheckId = undefined;
            this._secondaryRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._primaryRoute53HealthCheckId = value.primaryRoute53HealthCheckId;
            this._secondaryRegion = value.secondaryRegion;
        }
    }

    // primary_route_53_health_check_id - computed: true, optional: true, required: false
    private _primaryRoute53HealthCheckId?: string; 
    public get primaryRoute53HealthCheckId() {
        return this.getStringAttribute('primary_route_53_health_check_id');
    }
    public set primaryRoute53HealthCheckId(value: string) {
        this._primaryRoute53HealthCheckId = value;
    }
    public resetPrimaryRoute53HealthCheckId() {
        this._primaryRoute53HealthCheckId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryRoute53HealthCheckIdInput() {
        return this._primaryRoute53HealthCheckId;
    }

    // secondary_region - computed: true, optional: true, required: false
    private _secondaryRegion?: string; 
    public get secondaryRegion() {
        return this.getStringAttribute('secondary_region');
    }
    public set secondaryRegion(value: string) {
        this._secondaryRegion = value;
    }
    public resetSecondaryRegion() {
        this._secondaryRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryRegionInput() {
        return this._secondaryRegion;
    }
}
export interface RoutingTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#failover CcUserPoolDomain#failover}
    */
    readonly failover?: FailoverTypeProperty;
}
export class RoutingTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RoutingTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._failover?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.failover = this._failover?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoutingTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failover.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failover.internalValue = value.failover;
        }
    }

    // failover - computed: true, optional: true, required: false
    private _failover = new FailoverTypePropertyOutputReference(this, "failover");
    public get failover() {
        return this._failover;
    }
    public putFailover(value: FailoverTypeProperty) {
        this._failover.internalValue = value;
    }
    public resetFailover() {
        this._failover.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failoverInput() {
        return this._failover.internalValue;
    }
}
}
