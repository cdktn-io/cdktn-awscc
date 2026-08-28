// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLoadBalancerProps extends cdktn.TerraformMetaArguments {
    /**
    * The names of the instances attached to the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#attached_instances CcLoadBalancer#attached_instances}
    */
    readonly attachedInstances?: string[];
    /**
    * The path you provided to perform the load balancer health check. If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., "/").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#health_check_path CcLoadBalancer#health_check_path}
    */
    readonly healthCheckPath?: string;
    /**
    * The instance port where you're creating your load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#instance_port CcLoadBalancer#instance_port}
    */
    readonly instancePort: number;
    /**
    * The IP address type for the load balancer. The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#ip_address_type CcLoadBalancer#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * The name of your load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#load_balancer_name CcLoadBalancer#load_balancer_name}
    */
    readonly loadBalancerName: string;
    /**
    * Configuration option to enable session stickiness.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#session_stickiness_enabled CcLoadBalancer#session_stickiness_enabled}
    */
    readonly sessionStickinessEnabled?: boolean | cdktn.IResolvable;
    /**
    * Configuration option to adjust session stickiness cookie duration parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#session_stickiness_lb_cookie_duration_seconds CcLoadBalancer#session_stickiness_lb_cookie_duration_seconds}
    */
    readonly sessionStickinessLbCookieDurationSeconds?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#tags CcLoadBalancer#tags}
    */
    readonly tags?: CcLoadBalancer.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the TLS policy to apply to the load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#tls_policy_name CcLoadBalancer#tls_policy_name}
    */
    readonly tlsPolicyName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer awscc_lightsail_load_balancer}
*/
export class CcLoadBalancer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lightsail_load_balancer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLoadBalancer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLoadBalancer to import
    * @param importFromId The id of the existing CcLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLoadBalancer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_load_balancer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer awscc_lightsail_load_balancer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLoadBalancerProps
    */
    public constructor(scope: Construct, id: string, config: CcLoadBalancerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lightsail_load_balancer',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._attachedInstances = config.attachedInstances;
        this._healthCheckPath = config.healthCheckPath;
        this._instancePort = config.instancePort;
        this._ipAddressType = config.ipAddressType;
        this._loadBalancerName = config.loadBalancerName;
        this._sessionStickinessEnabled = config.sessionStickinessEnabled;
        this._sessionStickinessLbCookieDurationSeconds = config.sessionStickinessLbCookieDurationSeconds;
        this._tags.internalValue = config.tags;
        this._tlsPolicyName = config.tlsPolicyName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attached_instances - computed: true, optional: true, required: false
    private _attachedInstances?: string[]; 
    public get attachedInstances() {
        return cdktn.Fn.tolist(this.getListAttribute('attached_instances'));
    }
    public set attachedInstances(value: string[]) {
        this._attachedInstances = value;
    }
    public resetAttachedInstances() {
        this._attachedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachedInstancesInput() {
        return this._attachedInstances;
    }

    // health_check_path - computed: true, optional: true, required: false
    private _healthCheckPath?: string; 
    public get healthCheckPath() {
        return this.getStringAttribute('health_check_path');
    }
    public set healthCheckPath(value: string) {
        this._healthCheckPath = value;
    }
    public resetHealthCheckPath() {
        this._healthCheckPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckPathInput() {
        return this._healthCheckPath;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_port - computed: false, optional: false, required: true
    private _instancePort?: number; 
    public get instancePort() {
        return this.getNumberAttribute('instance_port');
    }
    public set instancePort(value: number) {
        this._instancePort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePortInput() {
        return this._instancePort;
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // load_balancer_arn - computed: true, optional: false, required: false
    public get loadBalancerArn() {
        return this.getStringAttribute('load_balancer_arn');
    }

    // load_balancer_name - computed: false, optional: false, required: true
    private _loadBalancerName?: string; 
    public get loadBalancerName() {
        return this.getStringAttribute('load_balancer_name');
    }
    public set loadBalancerName(value: string) {
        this._loadBalancerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerNameInput() {
        return this._loadBalancerName;
    }

    // session_stickiness_enabled - computed: true, optional: true, required: false
    private _sessionStickinessEnabled?: boolean | cdktn.IResolvable; 
    public get sessionStickinessEnabled() {
        return this.getBooleanAttribute('session_stickiness_enabled');
    }
    public set sessionStickinessEnabled(value: boolean | cdktn.IResolvable) {
        this._sessionStickinessEnabled = value;
    }
    public resetSessionStickinessEnabled() {
        this._sessionStickinessEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionStickinessEnabledInput() {
        return this._sessionStickinessEnabled;
    }

    // session_stickiness_lb_cookie_duration_seconds - computed: true, optional: true, required: false
    private _sessionStickinessLbCookieDurationSeconds?: string; 
    public get sessionStickinessLbCookieDurationSeconds() {
        return this.getStringAttribute('session_stickiness_lb_cookie_duration_seconds');
    }
    public set sessionStickinessLbCookieDurationSeconds(value: string) {
        this._sessionStickinessLbCookieDurationSeconds = value;
    }
    public resetSessionStickinessLbCookieDurationSeconds() {
        this._sessionStickinessLbCookieDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionStickinessLbCookieDurationSecondsInput() {
        return this._sessionStickinessLbCookieDurationSeconds;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLoadBalancer.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLoadBalancer.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tls_policy_name - computed: true, optional: true, required: false
    private _tlsPolicyName?: string; 
    public get tlsPolicyName() {
        return this.getStringAttribute('tls_policy_name');
    }
    public set tlsPolicyName(value: string) {
        this._tlsPolicyName = value;
    }
    public resetTlsPolicyName() {
        this._tlsPolicyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsPolicyNameInput() {
        return this._tlsPolicyName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            attached_instances: cdktn.listMapper(cdktn.stringToTerraform, false)(this._attachedInstances),
            health_check_path: cdktn.stringToTerraform(this._healthCheckPath),
            instance_port: cdktn.numberToTerraform(this._instancePort),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            load_balancer_name: cdktn.stringToTerraform(this._loadBalancerName),
            session_stickiness_enabled: cdktn.booleanToTerraform(this._sessionStickinessEnabled),
            session_stickiness_lb_cookie_duration_seconds: cdktn.stringToTerraform(this._sessionStickinessLbCookieDurationSeconds),
            tags: cdktn.listMapper(ccLoadBalancerTagPropertyToTerraform, false)(this._tags.internalValue),
            tls_policy_name: cdktn.stringToTerraform(this._tlsPolicyName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            attached_instances: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._attachedInstances),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            health_check_path: {
                value: cdktn.stringToHclTerraform(this._healthCheckPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_port: {
                value: cdktn.numberToHclTerraform(this._instancePort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ip_address_type: {
                value: cdktn.stringToHclTerraform(this._ipAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            load_balancer_name: {
                value: cdktn.stringToHclTerraform(this._loadBalancerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            session_stickiness_enabled: {
                value: cdktn.booleanToHclTerraform(this._sessionStickinessEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            session_stickiness_lb_cookie_duration_seconds: {
                value: cdktn.stringToHclTerraform(this._sessionStickinessLbCookieDurationSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLoadBalancerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLoadBalancer.TagPropertyList",
            },
            tls_policy_name: {
                value: cdktn.stringToHclTerraform(this._tlsPolicyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLoadBalancerTagPropertyToTerraform(struct?: CcLoadBalancer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLoadBalancerTagPropertyToHclTerraform(struct?: CcLoadBalancer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcLoadBalancer {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#key CcLoadBalancer#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_load_balancer#value CcLoadBalancer#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
