// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContainerProps extends cdktn.TerraformMetaArguments {
    /**
    * Describes a container deployment configuration of an Amazon Lightsail container service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#container_service_deployment CcContainer#container_service_deployment}
    */
    readonly containerServiceDeployment?: CcContainer.ContainerServiceDeploymentProperty;
    /**
    * A Boolean value to indicate whether the container service is disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#is_disabled CcContainer#is_disabled}
    */
    readonly isDisabled?: boolean | cdktn.IResolvable;
    /**
    * The power specification for the container service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#power CcContainer#power}
    */
    readonly power: string;
    /**
    * A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#private_registry_access CcContainer#private_registry_access}
    */
    readonly privateRegistryAccess?: CcContainer.PrivateRegistryAccessProperty;
    /**
    * The public domain names to use with the container service, such as example.com and www.example.com.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#public_domain_names CcContainer#public_domain_names}
    */
    readonly publicDomainNames?: CcContainer.PublicDomainNameProperty[] | cdktn.IResolvable;
    /**
    * The scale specification for the container service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#scale CcContainer#scale}
    */
    readonly scale: number;
    /**
    * The name for the container service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#service_name CcContainer#service_name}
    */
    readonly serviceName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#tags CcContainer#tags}
    */
    readonly tags?: CcContainer.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container awscc_lightsail_container}
*/
export class CcContainer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lightsail_container";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContainer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContainer to import
    * @param importFromId The id of the existing CcContainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContainer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_container", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container awscc_lightsail_container} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContainerProps
    */
    public constructor(scope: Construct, id: string, config: CcContainerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lightsail_container',
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
        this._containerServiceDeployment.internalValue = config.containerServiceDeployment;
        this._isDisabled = config.isDisabled;
        this._power = config.power;
        this._privateRegistryAccess.internalValue = config.privateRegistryAccess;
        this._publicDomainNames.internalValue = config.publicDomainNames;
        this._scale = config.scale;
        this._serviceName = config.serviceName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // container_arn - computed: true, optional: false, required: false
    public get containerArn() {
        return this.getStringAttribute('container_arn');
    }

    // container_service_deployment - computed: true, optional: true, required: false
    private _containerServiceDeployment = new CcContainer.ContainerServiceDeploymentPropertyOutputReference(this, "container_service_deployment");
    public get containerServiceDeployment() {
        return this._containerServiceDeployment;
    }
    public putContainerServiceDeployment(value: CcContainer.ContainerServiceDeploymentProperty) {
        this._containerServiceDeployment.internalValue = value;
    }
    public resetContainerServiceDeployment() {
        this._containerServiceDeployment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerServiceDeploymentInput() {
        return this._containerServiceDeployment.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_disabled - computed: true, optional: true, required: false
    private _isDisabled?: boolean | cdktn.IResolvable; 
    public get isDisabled() {
        return this.getBooleanAttribute('is_disabled');
    }
    public set isDisabled(value: boolean | cdktn.IResolvable) {
        this._isDisabled = value;
    }
    public resetIsDisabled() {
        this._isDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isDisabledInput() {
        return this._isDisabled;
    }

    // power - computed: false, optional: false, required: true
    private _power?: string; 
    public get power() {
        return this.getStringAttribute('power');
    }
    public set power(value: string) {
        this._power = value;
    }
    // Temporarily expose input value. Use with caution.
    public get powerInput() {
        return this._power;
    }

    // principal_arn - computed: true, optional: false, required: false
    public get principalArn() {
        return this.getStringAttribute('principal_arn');
    }

    // private_registry_access - computed: true, optional: true, required: false
    private _privateRegistryAccess = new CcContainer.PrivateRegistryAccessPropertyOutputReference(this, "private_registry_access");
    public get privateRegistryAccess() {
        return this._privateRegistryAccess;
    }
    public putPrivateRegistryAccess(value: CcContainer.PrivateRegistryAccessProperty) {
        this._privateRegistryAccess.internalValue = value;
    }
    public resetPrivateRegistryAccess() {
        this._privateRegistryAccess.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateRegistryAccessInput() {
        return this._privateRegistryAccess.internalValue;
    }

    // public_domain_names - computed: true, optional: true, required: false
    private _publicDomainNames = new CcContainer.PublicDomainNamePropertyList(this, "public_domain_names", true);
    public get publicDomainNames() {
        return this._publicDomainNames;
    }
    public putPublicDomainNames(value: CcContainer.PublicDomainNameProperty[] | cdktn.IResolvable) {
        this._publicDomainNames.internalValue = value;
    }
    public resetPublicDomainNames() {
        this._publicDomainNames.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicDomainNamesInput() {
        return this._publicDomainNames.internalValue;
    }

    // scale - computed: false, optional: false, required: true
    private _scale?: number; 
    public get scale() {
        return this.getNumberAttribute('scale');
    }
    public set scale(value: number) {
        this._scale = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInput() {
        return this._scale;
    }

    // service_name - computed: false, optional: false, required: true
    private _serviceName?: string; 
    public get serviceName() {
        return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
        this._serviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
        return this._serviceName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcContainer.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcContainer.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // url - computed: true, optional: false, required: false
    public get url() {
        return this.getStringAttribute('url');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            container_service_deployment: ccContainerContainerServiceDeploymentPropertyToTerraform(this._containerServiceDeployment.internalValue),
            is_disabled: cdktn.booleanToTerraform(this._isDisabled),
            power: cdktn.stringToTerraform(this._power),
            private_registry_access: ccContainerPrivateRegistryAccessPropertyToTerraform(this._privateRegistryAccess.internalValue),
            public_domain_names: cdktn.listMapper(ccContainerPublicDomainNamePropertyToTerraform, false)(this._publicDomainNames.internalValue),
            scale: cdktn.numberToTerraform(this._scale),
            service_name: cdktn.stringToTerraform(this._serviceName),
            tags: cdktn.listMapper(ccContainerTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            container_service_deployment: {
                value: ccContainerContainerServiceDeploymentPropertyToHclTerraform(this._containerServiceDeployment.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcContainer.ContainerServiceDeploymentProperty",
            },
            is_disabled: {
                value: cdktn.booleanToHclTerraform(this._isDisabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            power: {
                value: cdktn.stringToHclTerraform(this._power),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            private_registry_access: {
                value: ccContainerPrivateRegistryAccessPropertyToHclTerraform(this._privateRegistryAccess.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcContainer.PrivateRegistryAccessProperty",
            },
            public_domain_names: {
                value: cdktn.listMapperHcl(ccContainerPublicDomainNamePropertyToHclTerraform, false)(this._publicDomainNames.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcContainer.PublicDomainNamePropertyList",
            },
            scale: {
                value: cdktn.numberToHclTerraform(this._scale),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            service_name: {
                value: cdktn.stringToHclTerraform(this._serviceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccContainerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcContainer.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccContainerEnvironmentVariablePropertyToTerraform(struct?: CcContainer.EnvironmentVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
        variable: cdktn.stringToTerraform(struct!.variable),
    }
}


export function ccContainerEnvironmentVariablePropertyToHclTerraform(struct?: CcContainer.EnvironmentVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variable: {
            value: cdktn.stringToHclTerraform(struct!.variable),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerPortInfoPropertyToTerraform(struct?: CcContainer.PortInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        port: cdktn.stringToTerraform(struct!.port),
        protocol: cdktn.stringToTerraform(struct!.protocol),
    }
}


export function ccContainerPortInfoPropertyToHclTerraform(struct?: CcContainer.PortInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        port: {
            value: cdktn.stringToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerContainerPropertyToTerraform(struct?: CcContainer.ContainerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
        container_name: cdktn.stringToTerraform(struct!.containerName),
        environment: cdktn.listMapper(ccContainerEnvironmentVariablePropertyToTerraform, false)(struct!.environment),
        image: cdktn.stringToTerraform(struct!.image),
        ports: cdktn.listMapper(ccContainerPortInfoPropertyToTerraform, false)(struct!.ports),
    }
}


export function ccContainerContainerPropertyToHclTerraform(struct?: CcContainer.ContainerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        command: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        container_name: {
            value: cdktn.stringToHclTerraform(struct!.containerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktn.listMapperHcl(ccContainerEnvironmentVariablePropertyToHclTerraform, false)(struct!.environment),
            isBlock: true,
            type: "set",
            storageClassType: "EnvironmentVariablePropertyList",
        },
        image: {
            value: cdktn.stringToHclTerraform(struct!.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ports: {
            value: cdktn.listMapperHcl(ccContainerPortInfoPropertyToHclTerraform, false)(struct!.ports),
            isBlock: true,
            type: "set",
            storageClassType: "PortInfoPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerHealthCheckConfigPropertyToTerraform(struct?: CcContainer.HealthCheckConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        healthy_threshold: cdktn.numberToTerraform(struct!.healthyThreshold),
        interval_seconds: cdktn.numberToTerraform(struct!.intervalSeconds),
        path: cdktn.stringToTerraform(struct!.path),
        success_codes: cdktn.stringToTerraform(struct!.successCodes),
        timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
        unhealthy_threshold: cdktn.numberToTerraform(struct!.unhealthyThreshold),
    }
}


export function ccContainerHealthCheckConfigPropertyToHclTerraform(struct?: CcContainer.HealthCheckConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        healthy_threshold: {
            value: cdktn.numberToHclTerraform(struct!.healthyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval_seconds: {
            value: cdktn.numberToHclTerraform(struct!.intervalSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        success_codes: {
            value: cdktn.stringToHclTerraform(struct!.successCodes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unhealthy_threshold: {
            value: cdktn.numberToHclTerraform(struct!.unhealthyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerPublicEndpointPropertyToTerraform(struct?: CcContainer.PublicEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_name: cdktn.stringToTerraform(struct!.containerName),
        container_port: cdktn.numberToTerraform(struct!.containerPort),
        health_check_config: ccContainerHealthCheckConfigPropertyToTerraform(struct!.healthCheckConfig),
    }
}


export function ccContainerPublicEndpointPropertyToHclTerraform(struct?: CcContainer.PublicEndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_name: {
            value: cdktn.stringToHclTerraform(struct!.containerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        container_port: {
            value: cdktn.numberToHclTerraform(struct!.containerPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        health_check_config: {
            value: ccContainerHealthCheckConfigPropertyToHclTerraform(struct!.healthCheckConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HealthCheckConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerContainerServiceDeploymentPropertyToTerraform(struct?: CcContainer.ContainerServiceDeploymentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        containers: cdktn.listMapper(ccContainerContainerPropertyToTerraform, false)(struct!.containers),
        public_endpoint: ccContainerPublicEndpointPropertyToTerraform(struct!.publicEndpoint),
    }
}


export function ccContainerContainerServiceDeploymentPropertyToHclTerraform(struct?: CcContainer.ContainerServiceDeploymentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        containers: {
            value: cdktn.listMapperHcl(ccContainerContainerPropertyToHclTerraform, false)(struct!.containers),
            isBlock: true,
            type: "set",
            storageClassType: "ContainerPropertyList",
        },
        public_endpoint: {
            value: ccContainerPublicEndpointPropertyToHclTerraform(struct!.publicEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "PublicEndpointProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerEcrImagePullerRolePropertyToTerraform(struct?: CcContainer.EcrImagePullerRoleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_active: cdktn.booleanToTerraform(struct!.isActive),
    }
}


export function ccContainerEcrImagePullerRolePropertyToHclTerraform(struct?: CcContainer.EcrImagePullerRoleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_active: {
            value: cdktn.booleanToHclTerraform(struct!.isActive),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerPrivateRegistryAccessPropertyToTerraform(struct?: CcContainer.PrivateRegistryAccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ecr_image_puller_role: ccContainerEcrImagePullerRolePropertyToTerraform(struct!.ecrImagePullerRole),
    }
}


export function ccContainerPrivateRegistryAccessPropertyToHclTerraform(struct?: CcContainer.PrivateRegistryAccessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ecr_image_puller_role: {
            value: ccContainerEcrImagePullerRolePropertyToHclTerraform(struct!.ecrImagePullerRole),
            isBlock: true,
            type: "struct",
            storageClassType: "EcrImagePullerRoleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerPublicDomainNamePropertyToTerraform(struct?: CcContainer.PublicDomainNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_name: cdktn.stringToTerraform(struct!.certificateName),
        domain_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.domainNames),
    }
}


export function ccContainerPublicDomainNamePropertyToHclTerraform(struct?: CcContainer.PublicDomainNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_name: {
            value: cdktn.stringToHclTerraform(struct!.certificateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        domain_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.domainNames),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccContainerTagPropertyToTerraform(struct?: CcContainer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccContainerTagPropertyToHclTerraform(struct?: CcContainer.TagProperty | cdktn.IResolvable): any {
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


export namespace CcContainer {
export interface EnvironmentVariableProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#value CcContainer#value}
    */
    readonly value?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#variable CcContainer#variable}
    */
    readonly variable?: string;
}
export class EnvironmentVariablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EnvironmentVariableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        if (this._variable !== undefined) {
            hasAnyValues = true;
            internalValueResult.variable = this._variable;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnvironmentVariableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
            this._variable = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
            this._variable = value.variable;
        }
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

    // variable - computed: true, optional: true, required: false
    private _variable?: string; 
    public get variable() {
        return this.getStringAttribute('variable');
    }
    public set variable(value: string) {
        this._variable = value;
    }
    public resetVariable() {
        this._variable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variableInput() {
        return this._variable;
    }
}

export class EnvironmentVariablePropertyList extends cdktn.ComplexList {
    public internalValue? : EnvironmentVariableProperty[] | cdktn.IResolvable

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
    public get(index: number): EnvironmentVariablePropertyOutputReference {
        return new EnvironmentVariablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PortInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#port CcContainer#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#protocol CcContainer#protocol}
    */
    readonly protocol?: string;
}
export class PortInfoPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PortInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._port = undefined;
            this._protocol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._port = value.port;
            this._protocol = value.protocol;
        }
    }

    // port - computed: true, optional: true, required: false
    private _port?: string; 
    public get port() {
        return this.getStringAttribute('port');
    }
    public set port(value: string) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }
}

export class PortInfoPropertyList extends cdktn.ComplexList {
    public internalValue? : PortInfoProperty[] | cdktn.IResolvable

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
    public get(index: number): PortInfoPropertyOutputReference {
        return new PortInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ContainerProperty {
    /**
    * The launch command for the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#command CcContainer#command}
    */
    readonly command?: string[];
    /**
    * The name of the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#container_name CcContainer#container_name}
    */
    readonly containerName?: string;
    /**
    * The environment variables of the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#environment CcContainer#environment}
    */
    readonly environment?: EnvironmentVariableProperty[] | cdktn.IResolvable;
    /**
    * The name of the image used for the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#image CcContainer#image}
    */
    readonly image?: string;
    /**
    * The open firewall ports of the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#ports CcContainer#ports}
    */
    readonly ports?: PortInfoProperty[] | cdktn.IResolvable;
}
export class ContainerPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ContainerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._command !== undefined) {
            hasAnyValues = true;
            internalValueResult.command = this._command;
        }
        if (this._containerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerName = this._containerName;
        }
        if (this._environment?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment?.internalValue;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._ports?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ports = this._ports?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._command = undefined;
            this._containerName = undefined;
            this._environment.internalValue = undefined;
            this._image = undefined;
            this._ports.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._command = value.command;
            this._containerName = value.containerName;
            this._environment.internalValue = value.environment;
            this._image = value.image;
            this._ports.internalValue = value.ports;
        }
    }

    // command - computed: true, optional: true, required: false
    private _command?: string[]; 
    public get command() {
        return cdktn.Fn.tolist(this.getListAttribute('command'));
    }
    public set command(value: string[]) {
        this._command = value;
    }
    public resetCommand() {
        this._command = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commandInput() {
        return this._command;
    }

    // container_name - computed: true, optional: true, required: false
    private _containerName?: string; 
    public get containerName() {
        return this.getStringAttribute('container_name');
    }
    public set containerName(value: string) {
        this._containerName = value;
    }
    public resetContainerName() {
        this._containerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerNameInput() {
        return this._containerName;
    }

    // environment - computed: true, optional: true, required: false
    private _environment = new EnvironmentVariablePropertyList(this, "environment", true);
    public get environment() {
        return this._environment;
    }
    public putEnvironment(value: EnvironmentVariableProperty[] | cdktn.IResolvable) {
        this._environment.internalValue = value;
    }
    public resetEnvironment() {
        this._environment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment.internalValue;
    }

    // image - computed: true, optional: true, required: false
    private _image?: string; 
    public get image() {
        return this.getStringAttribute('image');
    }
    public set image(value: string) {
        this._image = value;
    }
    public resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image;
    }

    // ports - computed: true, optional: true, required: false
    private _ports = new PortInfoPropertyList(this, "ports", true);
    public get ports() {
        return this._ports;
    }
    public putPorts(value: PortInfoProperty[] | cdktn.IResolvable) {
        this._ports.internalValue = value;
    }
    public resetPorts() {
        this._ports.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portsInput() {
        return this._ports.internalValue;
    }
}

export class ContainerPropertyList extends cdktn.ComplexList {
    public internalValue? : ContainerProperty[] | cdktn.IResolvable

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
    public get(index: number): ContainerPropertyOutputReference {
        return new ContainerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HealthCheckConfigProperty {
    /**
    * The number of consecutive health checks successes required before moving the container to the Healthy state. The default value is 2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#healthy_threshold CcContainer#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * The approximate interval, in seconds, between health checks of an individual container. You can specify between 5 and 300 seconds. The default value is 5.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#interval_seconds CcContainer#interval_seconds}
    */
    readonly intervalSeconds?: number;
    /**
    * The path on the container on which to perform the health check. The default value is /.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#path CcContainer#path}
    */
    readonly path?: string;
    /**
    * The HTTP codes to use when checking for a successful response from a container. You can specify values between 200 and 499. You can specify multiple values (for example, 200,202) or a range of values (for example, 200-299).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#success_codes CcContainer#success_codes}
    */
    readonly successCodes?: string;
    /**
    * The amount of time, in seconds, during which no response means a failed health check. You can specify between 2 and 60 seconds. The default value is 2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#timeout_seconds CcContainer#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
    /**
    * The number of consecutive health check failures required before moving the container to the Unhealthy state. The default value is 2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#unhealthy_threshold CcContainer#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
}
export class HealthCheckConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HealthCheckConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._healthyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthyThreshold = this._healthyThreshold;
        }
        if (this._intervalSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.intervalSeconds = this._intervalSeconds;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._successCodes !== undefined) {
            hasAnyValues = true;
            internalValueResult.successCodes = this._successCodes;
        }
        if (this._timeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutSeconds = this._timeoutSeconds;
        }
        if (this._unhealthyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthCheckConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._healthyThreshold = undefined;
            this._intervalSeconds = undefined;
            this._path = undefined;
            this._successCodes = undefined;
            this._timeoutSeconds = undefined;
            this._unhealthyThreshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._healthyThreshold = value.healthyThreshold;
            this._intervalSeconds = value.intervalSeconds;
            this._path = value.path;
            this._successCodes = value.successCodes;
            this._timeoutSeconds = value.timeoutSeconds;
            this._unhealthyThreshold = value.unhealthyThreshold;
        }
    }

    // healthy_threshold - computed: true, optional: true, required: false
    private _healthyThreshold?: number; 
    public get healthyThreshold() {
        return this.getNumberAttribute('healthy_threshold');
    }
    public set healthyThreshold(value: number) {
        this._healthyThreshold = value;
    }
    public resetHealthyThreshold() {
        this._healthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthyThresholdInput() {
        return this._healthyThreshold;
    }

    // interval_seconds - computed: true, optional: true, required: false
    private _intervalSeconds?: number; 
    public get intervalSeconds() {
        return this.getNumberAttribute('interval_seconds');
    }
    public set intervalSeconds(value: number) {
        this._intervalSeconds = value;
    }
    public resetIntervalSeconds() {
        this._intervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalSecondsInput() {
        return this._intervalSeconds;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // success_codes - computed: true, optional: true, required: false
    private _successCodes?: string; 
    public get successCodes() {
        return this.getStringAttribute('success_codes');
    }
    public set successCodes(value: string) {
        this._successCodes = value;
    }
    public resetSuccessCodes() {
        this._successCodes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successCodesInput() {
        return this._successCodes;
    }

    // timeout_seconds - computed: true, optional: true, required: false
    private _timeoutSeconds?: number; 
    public get timeoutSeconds() {
        return this.getNumberAttribute('timeout_seconds');
    }
    public set timeoutSeconds(value: number) {
        this._timeoutSeconds = value;
    }
    public resetTimeoutSeconds() {
        this._timeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutSecondsInput() {
        return this._timeoutSeconds;
    }

    // unhealthy_threshold - computed: true, optional: true, required: false
    private _unhealthyThreshold?: number; 
    public get unhealthyThreshold() {
        return this.getNumberAttribute('unhealthy_threshold');
    }
    public set unhealthyThreshold(value: number) {
        this._unhealthyThreshold = value;
    }
    public resetUnhealthyThreshold() {
        this._unhealthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unhealthyThresholdInput() {
        return this._unhealthyThreshold;
    }
}
export interface PublicEndpointProperty {
    /**
    * The name of the container for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#container_name CcContainer#container_name}
    */
    readonly containerName?: string;
    /**
    * The port of the container to which traffic is forwarded to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#container_port CcContainer#container_port}
    */
    readonly containerPort?: number;
    /**
    * An object that describes the health check configuration of the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#health_check_config CcContainer#health_check_config}
    */
    readonly healthCheckConfig?: HealthCheckConfigProperty;
}
export class PublicEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PublicEndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerName = this._containerName;
        }
        if (this._containerPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerPort = this._containerPort;
        }
        if (this._healthCheckConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthCheckConfig = this._healthCheckConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublicEndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerName = undefined;
            this._containerPort = undefined;
            this._healthCheckConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerName = value.containerName;
            this._containerPort = value.containerPort;
            this._healthCheckConfig.internalValue = value.healthCheckConfig;
        }
    }

    // container_name - computed: true, optional: true, required: false
    private _containerName?: string; 
    public get containerName() {
        return this.getStringAttribute('container_name');
    }
    public set containerName(value: string) {
        this._containerName = value;
    }
    public resetContainerName() {
        this._containerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerNameInput() {
        return this._containerName;
    }

    // container_port - computed: true, optional: true, required: false
    private _containerPort?: number; 
    public get containerPort() {
        return this.getNumberAttribute('container_port');
    }
    public set containerPort(value: number) {
        this._containerPort = value;
    }
    public resetContainerPort() {
        this._containerPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerPortInput() {
        return this._containerPort;
    }

    // health_check_config - computed: true, optional: true, required: false
    private _healthCheckConfig = new HealthCheckConfigPropertyOutputReference(this, "health_check_config");
    public get healthCheckConfig() {
        return this._healthCheckConfig;
    }
    public putHealthCheckConfig(value: HealthCheckConfigProperty) {
        this._healthCheckConfig.internalValue = value;
    }
    public resetHealthCheckConfig() {
        this._healthCheckConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckConfigInput() {
        return this._healthCheckConfig.internalValue;
    }
}
export interface ContainerServiceDeploymentProperty {
    /**
    * An object that describes the configuration for the containers of the deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#containers CcContainer#containers}
    */
    readonly containers?: ContainerProperty[] | cdktn.IResolvable;
    /**
    * An object that describes the endpoint of the deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#public_endpoint CcContainer#public_endpoint}
    */
    readonly publicEndpoint?: PublicEndpointProperty;
}
export class ContainerServiceDeploymentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContainerServiceDeploymentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containers = this._containers?.internalValue;
        }
        if (this._publicEndpoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.publicEndpoint = this._publicEndpoint?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerServiceDeploymentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containers.internalValue = undefined;
            this._publicEndpoint.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containers.internalValue = value.containers;
            this._publicEndpoint.internalValue = value.publicEndpoint;
        }
    }

    // containers - computed: true, optional: true, required: false
    private _containers = new ContainerPropertyList(this, "containers", true);
    public get containers() {
        return this._containers;
    }
    public putContainers(value: ContainerProperty[] | cdktn.IResolvable) {
        this._containers.internalValue = value;
    }
    public resetContainers() {
        this._containers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containersInput() {
        return this._containers.internalValue;
    }

    // public_endpoint - computed: true, optional: true, required: false
    private _publicEndpoint = new PublicEndpointPropertyOutputReference(this, "public_endpoint");
    public get publicEndpoint() {
        return this._publicEndpoint;
    }
    public putPublicEndpoint(value: PublicEndpointProperty) {
        this._publicEndpoint.internalValue = value;
    }
    public resetPublicEndpoint() {
        this._publicEndpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicEndpointInput() {
        return this._publicEndpoint.internalValue;
    }
}
export interface EcrImagePullerRoleProperty {
    /**
    * A Boolean value that indicates whether to activate the role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#is_active CcContainer#is_active}
    */
    readonly isActive?: boolean | cdktn.IResolvable;
}
export class EcrImagePullerRolePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EcrImagePullerRoleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isActive !== undefined) {
            hasAnyValues = true;
            internalValueResult.isActive = this._isActive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcrImagePullerRoleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isActive = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isActive = value.isActive;
        }
    }

    // is_active - computed: true, optional: true, required: false
    private _isActive?: boolean | cdktn.IResolvable; 
    public get isActive() {
        return this.getBooleanAttribute('is_active');
    }
    public set isActive(value: boolean | cdktn.IResolvable) {
        this._isActive = value;
    }
    public resetIsActive() {
        this._isActive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isActiveInput() {
        return this._isActive;
    }

    // principal_arn - computed: true, optional: false, required: false
    public get principalArn() {
        return this.getStringAttribute('principal_arn');
    }
}
export interface PrivateRegistryAccessProperty {
    /**
    * An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#ecr_image_puller_role CcContainer#ecr_image_puller_role}
    */
    readonly ecrImagePullerRole?: EcrImagePullerRoleProperty;
}
export class PrivateRegistryAccessPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateRegistryAccessProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ecrImagePullerRole?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecrImagePullerRole = this._ecrImagePullerRole?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateRegistryAccessProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ecrImagePullerRole.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ecrImagePullerRole.internalValue = value.ecrImagePullerRole;
        }
    }

    // ecr_image_puller_role - computed: true, optional: true, required: false
    private _ecrImagePullerRole = new EcrImagePullerRolePropertyOutputReference(this, "ecr_image_puller_role");
    public get ecrImagePullerRole() {
        return this._ecrImagePullerRole;
    }
    public putEcrImagePullerRole(value: EcrImagePullerRoleProperty) {
        this._ecrImagePullerRole.internalValue = value;
    }
    public resetEcrImagePullerRole() {
        this._ecrImagePullerRole.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecrImagePullerRoleInput() {
        return this._ecrImagePullerRole.internalValue;
    }
}
export interface PublicDomainNameProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#certificate_name CcContainer#certificate_name}
    */
    readonly certificateName?: string;
    /**
    * An object that describes the configuration for the containers of the deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#domain_names CcContainer#domain_names}
    */
    readonly domainNames?: string[];
}
export class PublicDomainNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PublicDomainNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateName = this._certificateName;
        }
        if (this._domainNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainNames = this._domainNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublicDomainNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateName = undefined;
            this._domainNames = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateName = value.certificateName;
            this._domainNames = value.domainNames;
        }
    }

    // certificate_name - computed: true, optional: true, required: false
    private _certificateName?: string; 
    public get certificateName() {
        return this.getStringAttribute('certificate_name');
    }
    public set certificateName(value: string) {
        this._certificateName = value;
    }
    public resetCertificateName() {
        this._certificateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateNameInput() {
        return this._certificateName;
    }

    // domain_names - computed: true, optional: true, required: false
    private _domainNames?: string[]; 
    public get domainNames() {
        return cdktn.Fn.tolist(this.getListAttribute('domain_names'));
    }
    public set domainNames(value: string[]) {
        this._domainNames = value;
    }
    public resetDomainNames() {
        this._domainNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNamesInput() {
        return this._domainNames;
    }
}

export class PublicDomainNamePropertyList extends cdktn.ComplexList {
    public internalValue? : PublicDomainNameProperty[] | cdktn.IResolvable

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
    public get(index: number): PublicDomainNamePropertyOutputReference {
        return new PublicDomainNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#key CcContainer#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lightsail_container#value CcContainer#value}
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
