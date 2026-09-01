// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcListenerProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the accelerator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#accelerator_arn CcListener#accelerator_arn}
    */
    readonly acceleratorArn: string;
    /**
    * Client affinity lets you direct all requests from a user to the same endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#client_affinity CcListener#client_affinity}
    */
    readonly clientAffinity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#port_ranges CcListener#port_ranges}
    */
    readonly portRanges: CcListener.PortRangeProperty[] | cdktn.IResolvable;
    /**
    * The protocol for the listener.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#protocol CcListener#protocol}
    */
    readonly protocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener awscc_globalaccelerator_listener}
*/
export class CcListener extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_globalaccelerator_listener";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcListener resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcListener to import
    * @param importFromId The id of the existing CcListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcListener to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_globalaccelerator_listener", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener awscc_globalaccelerator_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcListenerProps
    */
    public constructor(scope: Construct, id: string, config: CcListenerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_globalaccelerator_listener',
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
        this._acceleratorArn = config.acceleratorArn;
        this._clientAffinity = config.clientAffinity;
        this._portRanges.internalValue = config.portRanges;
        this._protocol = config.protocol;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accelerator_arn - computed: false, optional: false, required: true
    private _acceleratorArn?: string; 
    public get acceleratorArn() {
        return this.getStringAttribute('accelerator_arn');
    }
    public set acceleratorArn(value: string) {
        this._acceleratorArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorArnInput() {
        return this._acceleratorArn;
    }

    // client_affinity - computed: true, optional: true, required: false
    private _clientAffinity?: string; 
    public get clientAffinity() {
        return this.getStringAttribute('client_affinity');
    }
    public set clientAffinity(value: string) {
        this._clientAffinity = value;
    }
    public resetClientAffinity() {
        this._clientAffinity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientAffinityInput() {
        return this._clientAffinity;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // listener_arn - computed: true, optional: false, required: false
    public get listenerArn() {
        return this.getStringAttribute('listener_arn');
    }

    // port_ranges - computed: false, optional: false, required: true
    private _portRanges = new CcListener.PortRangePropertyList(this, "port_ranges", false);
    public get portRanges() {
        return this._portRanges;
    }
    public putPortRanges(value: CcListener.PortRangeProperty[] | cdktn.IResolvable) {
        this._portRanges.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portRangesInput() {
        return this._portRanges.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accelerator_arn: cdktn.stringToTerraform(this._acceleratorArn),
            client_affinity: cdktn.stringToTerraform(this._clientAffinity),
            port_ranges: cdktn.listMapper(ccListenerPortRangePropertyToTerraform, false)(this._portRanges.internalValue),
            protocol: cdktn.stringToTerraform(this._protocol),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            accelerator_arn: {
                value: cdktn.stringToHclTerraform(this._acceleratorArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            client_affinity: {
                value: cdktn.stringToHclTerraform(this._clientAffinity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port_ranges: {
                value: cdktn.listMapperHcl(ccListenerPortRangePropertyToHclTerraform, false)(this._portRanges.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcListener.PortRangePropertyList",
            },
            protocol: {
                value: cdktn.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccListenerPortRangePropertyToTerraform(struct?: CcListener.PortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccListenerPortRangePropertyToHclTerraform(struct?: CcListener.PortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcListener {
export interface PortRangeProperty {
    /**
    * A network port number
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#from_port CcListener#from_port}
    */
    readonly fromPort: number;
    /**
    * A network port number
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#to_port CcListener#to_port}
    */
    readonly toPort: number;
}
export class PortRangePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }

    // from_port - computed: false, optional: false, required: true
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // to_port - computed: false, optional: false, required: true
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}

export class PortRangePropertyList extends cdktn.ComplexList {
    public internalValue? : PortRangeProperty[] | cdktn.IResolvable

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
    public get(index: number): PortRangePropertyOutputReference {
        return new PortRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
